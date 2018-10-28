import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-parking-form-reactive',
  templateUrl: './parking-form-reactive.component.html',
  styleUrls: ['./parking-form-reactive.component.css']
})
export class ParkingFormReactiveComponent implements OnInit{

  profileForm = new FormGroup({
    idR: new FormControl(''),
    nameR: new FormControl(''),
    descriptionR: new FormControl(''),
  });

  onSubmitR() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }


  ngOnInit(): void {


  }


}
