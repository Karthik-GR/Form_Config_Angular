import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { FormConfigService } from '../../services/form-config.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  fields: any[] = [];
  registerForm!: FormGroup;

  constructor(
    private formConfigService: FormConfigService, 
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.fields = this.formConfigService.getFields();
    this.initializeForm();
  }

  initializeForm(): void {
    let group: any = {};
    this.fields.forEach(field => {
      if (field.show) {
        group[field.name] = field.required 
          ? [ '', [ Validators.required, this.optionalPatternValidator(field.validation) ] ]
          : [ '', this.optionalPatternValidator(field.validation) ];
      }
    });
    this.registerForm = this.fb.group(group);
  }


  optionalPatternValidator(patternStr: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) {
        return null;
      }
      if (control.value.startsWith(' ')) {
        return { pattern: 'First character cannot be a space.' };
      }

      if (patternStr) {
        const regex = new RegExp(patternStr) ;
        return regex.test(control.value) ? null : { pattern: 'Invalid format.' };
      }
      return null;
    };
  }


  onSubmit() {
    if (this.registerForm.valid) {
      console.log('Form Submitted:', this.registerForm.value);
      this.router.navigate(['/home']);
    }
  }

  visibleFieldCount(): number {
    return this.fields.filter(field => field.show).length;
  }

  isAnyFieldFilled(): boolean {
    return Object.keys(this.registerForm.controls).some(key => this.registerForm.controls[key].value && this.registerForm.controls[key].value.trim() !== '');
  }
  
}
