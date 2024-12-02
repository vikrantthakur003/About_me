import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  @Input() value: any = '';
  @Input() placeHolderText: any = '';
  @Input() labelText: any = '';
  @Output() valueChange = new EventEmitter<any>();

  onInputChange(event: any): void {

    this.value = event.target.value;

    this.valueChange.emit(this.value);
  }
}
