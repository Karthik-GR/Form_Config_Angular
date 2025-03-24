import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class FormConfigService {

  private fields = [
    { name: 'name', label: 'Name', show: true, required: true, inputField: 'input', inputType: 'text', validation: '^[A-Za-z\\s]+$' },
    { name: 'mobile', label: 'Mobile', show: true, required: true,inputField: 'input', inputType: 'tel', validation: '^\\+?[1-9][0-9]{7,14}$' },
    { name: 'email', label: 'Email', show: true, required: true, inputField: 'input',inputType: 'email', validation: '^[a-z][a-z0-9]*(?:[._%+-][a-z0-9]*)?@[a-z0-9.-]+\.[a-z]{2,}$' },
    { name: 'address', label: 'Address', show: true, required: true,inputField: 'textarea', inputType: 'textarea', validation: '' },
  ];
  

  getFields() {
    return [...this.fields];
  }

  updateFields(updatedFields: any[]) {
    this.fields = [...updatedFields];
    console.log('Updated fields:', this.fields);
  }
}

//field named comparison (remove)
//add extra fields, validation and name
