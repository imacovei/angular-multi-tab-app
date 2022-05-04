import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function filterLengthValidator(minLength: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => 
    {
      return (control.value?.length == 0 || control.value.length >= minLength) ? null : {filterMinLength: {value: control.value}};
    };
  }