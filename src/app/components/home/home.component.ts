import { Component } from '@angular/core';
import { DropTargetEvent } from '@progress/kendo-angular-utils/drag-and-drop/events';
import { FormConfigService } from 'src/app/services/form-config.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  // fields: any[] = [];

  // constructor(private formConfigService: FormConfigService) { }

  // ngOnInit(): void {
  //   this.fields = this.formConfigService.getFields();
  //   console.log('Loaded fields:', this.fields);
  // }
  
  // toggleRequired(field: any): void {
  //   if (!field.show) {
  //     field.required = false;
  //   }
  // }


  // dragData = ({ dragTarget }: any) => {
  //   return Number(dragTarget.getAttribute("data-index"));
  // };

  // onDrop(e: DropTargetEvent): void {
  //   const fromIndex = e.dragData;
  //   const toIndex = Number(e.dropTarget.getAttribute("data-index"));

  //   if (fromIndex === toIndex) {
  //     return;
  //   }

  //   const movedItem = this.fields[fromIndex];
  //   this.fields.splice(fromIndex, 1);
  //   this.fields.splice(toIndex, 0, movedItem);

  // }

  // saveChanges() {
  //   this.formConfigService.updateFields(this.fields);
  // }
}
