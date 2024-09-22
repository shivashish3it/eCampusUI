//import { Component } from '@angular/core';
import { Component, ElementRef, Input, ViewChild } from '@angular/core';

declare var bootstrap: any; 

@Component({
  selector: 'app-popup-modal',
  templateUrl: './popup-modal.component.html',
  styleUrls: ['./popup-modal.component.sass']
})
export class PopupModalComponent {
  @ViewChild('modalElement') modalElement!: ElementRef;
  @Input() title: string = 'Error !'; // Set default title
  @Input() message: string = 'This is the default message.'; // Set default message

  private modalInstance: any;

  open() {
    this.modalInstance = new bootstrap.Modal(this.modalElement.nativeElement);
    this.modalInstance.show();
  }

  close() {
    if (this.modalInstance) {
      this.modalInstance.hide();
    }
  }
}
 