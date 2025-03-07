import { Component } from '@angular/core';
import { DropTargetEvent } from '@progress/kendo-angular-utils/drag-and-drop/events';
import { FormConfigService } from '../../services/form-config.service';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss']
})
export class ConfigComponent {
  fields: any[] = [];

  constructor(private formConfigService: FormConfigService) { }

  ngOnInit(): void {
    this.fields = JSON.parse(JSON.stringify(this.formConfigService.getFields()));
    console.log('Loaded fields:', this.fields);
  }
  getConfigService(getConfigService: any): string {
    throw new Error('Method not implemented.');
  }
  
  toggleRequired(field: any): void {
    if (!field.show) {
      field.required = false;
    }
  }

  dragData = ({ dragTarget }: any) => {
    return Number(dragTarget.getAttribute("data-index"));
  };

  onDrop(e: DropTargetEvent): void {
    const fromIndex = e.dragData;
    const toIndex = Number(e.dropTarget.getAttribute("data-index"));

    if (fromIndex === toIndex) {
      return;
    }

    const movedItem = this.fields[fromIndex];
    this.fields.splice(fromIndex, 1);
    this.fields.splice(toIndex, 0, movedItem);
  }

  saveChanges() {
    this.formConfigService.updateFields(this.fields);
  }

  isAtLeastOneFieldChecked(): boolean {
    return this.fields.some(field => field.show);
  }
  
}
