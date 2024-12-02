import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.css']
})
export class TextareaComponent {
  @Input() value: any = '';
  @Input() placeHolderText: any = '';
  @Input() labelText: any = '';
  @Output() valueChange = new EventEmitter<any>();

  onInputChange(event: any): void {

    this.value = event.target.value;
    console.log(this.value)

    this.valueChange.emit(this.value);
  }
}
