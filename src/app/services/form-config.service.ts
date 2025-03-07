import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormConfigService {
  private fields = [
    { name: 'name', label: 'Name', show: true, required: true },
    { name: 'mobile', label: 'Mobile', show: true, required: true },
    { name: 'email', label: 'Email', show: true, required: true },
    { name: 'address', label: 'Address', show: true, required: true },
  ];

  getFields() {
    return [...this.fields];
  }

  updateFields(updatedFields: any[]) {
    this.fields = [...updatedFields];
    console.log('Updated fields:', this.fields);

  }
}