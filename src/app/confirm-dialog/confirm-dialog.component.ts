//import { Component } from '@angular/core';
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
declare var $: any; 
declare var bootstrap: any; 

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  //styleUrls: ['./confirm-dialog.component.sass']
})
export class ConfirmDialogComponent {
  @ViewChild('modalElement') modalElement!: ElementRef;
  @Input() title: string = 'Error !'; // Set default title
  @Input() message: string = 'This is the default message.'; // Set default message

  //private modalInstance: any;

  openModal() {
    // Open the Bootstrap modal
    $('#confirmDeleteModal').modal('show');
  }

  closeModal() {
    // Close the Bootstrap modal
    $('#confirmDeleteModal').modal('hide');
  }

  confirmDelete() {
    // Handle the delete confirmation
    alert('Item deleted!');
    this.closeModal(); // Close the modal after confirmation
  }
}


// ==================
                         