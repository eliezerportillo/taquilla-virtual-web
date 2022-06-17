import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IAttendee, OrderItem } from 'src/app/models/models';

@Component({
  selector: 'app-ticket-image-picker',
  templateUrl: './ticket-image-picker.component.html',
  styleUrls: ['./ticket-image-picker.component.scss']
})
export class TicketImagePickerComponent {

  @Input()
  mode: string;
  @Input()
  text: string;

  fileString: any;
  @Output()
  onLoadEnd = new EventEmitter<string | ArrayBuffer | null>();
  constructor() {
    this.mode = 'image';
    this.text = 'Añadir foto';
  }

  fileSelected($event: Event): void {
    this.readThis($event.target);
  }

  readThis(inputValue: any): void {
    var file: File = inputValue.files[0];
    var myReader: FileReader = new FileReader();
    var fileType = inputValue.parentElement.id;
    myReader.onloadend = (e) => {
      this.fileString = myReader.result;
      this.onLoadEnd.emit(this.fileString);
    };

    myReader.readAsDataURL(file);
  }
}
