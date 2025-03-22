// import { Component, OnInit, ViewChild } from '@angular/core';
// import { FormConfigService } from '../../services/form-config.service';
// import { DropTargetEvent } from '@progress/kendo-angular-utils/drag-and-drop/events';
// import {
//   DragTargetContainerDirective,
//   DropTargetContainerDirective,
// } from '@progress/kendo-angular-dragdrop';

// @Component({
//   selector: 'app-config',
//   templateUrl: './config.component.html',
//   styleUrls: ['./config.component.scss']
// })
// export class ConfigComponent implements OnInit {
//   fields: any[] = [];

//   @ViewChild('wrapper', { read: DragTargetContainerDirective })
//   public dragTargetContainer!: DragTargetContainerDirective;

//   @ViewChild('wrapper', { read: DropTargetContainerDirective })
//   public dropTargetContainer!: DropTargetContainerDirective;

//   constructor(private formConfigService: FormConfigService) { }

//   ngOnInit(): void {
//     this.fields = this.formConfigService.getFields();
//     console.log('Loaded fields:', this.fields);
//   }

//   // If "Show Field" is unchecked, ensure "Required" is also false.
//   toggleRequired(field: any): void {
//     if (!field.show) {
//       field.required = false;
//     }
//   }

//   // Drag data: we use the row's data-index attribute as the index.
//   dragData = ({ dragTarget }: any) => {
//     return Number(dragTarget.getAttribute('data-index'));
//   };

//   // Handle drop event: reorder the fields array.
//   onDrop(e: DropTargetEvent): void {
//     const fromIndex = e.dragData;
//     // Use dropTarget's data-index attribute. Make sure it exists.
//     const toIndex = Number(e.dropTarget.getAttribute('data-index'));
//     if (isNaN(fromIndex) || isNaN(toIndex) || fromIndex === toIndex) {
//       return;
//     }
//     const movedItem = this.fields[fromIndex];
//     this.fields.splice(fromIndex, 1);
//     this.fields.splice(toIndex, 0, movedItem);

//     // Optionally, notify the containers (if needed)
//     this.dragTargetContainer.notify();
//     this.dropTargetContainer.notify();
//   }

//   // Save the updated fields configuration via the service.
//   saveChanges(): void {
//     this.formConfigService.updateFields(this.fields);
//   }
// }
