import { Component, OnDestroy, OnInit } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { SharedService } from '../../../services/shared.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-toast',
  imports:[CommonModule],
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent implements OnInit, OnDestroy {
  messageStack: any = [];

  toastSubscription$: any;
  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    this.showToastr();
  }
  ngOnDestroy(): void {
    this.toastSubscription$.unsubscribe();
  }

  showToastr() {
    this.toastSubscription$ = this.sharedService.toast.subscribe((result) => {
      const uid = uuid();      

      setTimeout(() => {
        this.closeToastr(uid);
      }, 5000);

      if (!this.messageStack.find((message: any) =>
        message.type === result.type &&
        message.title === result.title)) {
        this.messageStack.unshift({ type: result.type, title: result.title, uid });
      }
    });
  }

  closeToastr(uid: string) {
    this.messageStack = this.messageStack.filter((message: any) => message.uid !== uid);
  }
}
