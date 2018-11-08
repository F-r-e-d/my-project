import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-parking-form-reactive',
  templateUrl: './parking-form-reactive.component.html',
  styleUrls: ['./parking-form-reactive.component.css']
})
export class ParkingFormReactiveComponent implements OnInit{

  profileForm: FormGroup;

  constructor(private fb: FormBuilder){}

  onSubmitR() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }


  ngOnInit(): void {
    this.profileForm = this.fb.group({
      idR: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(5) ]],
      nameR: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(20) ]],
      descriptionR: [''],
    });

  }


}
