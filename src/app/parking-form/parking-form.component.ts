import { Component, OnInit } from '@angular/core';
import { Parking } from './../parking';
import { PARKINGS } from 'src/app/mock-parkings';


@Component({
  selector: 'app-parking-form',
  templateUrl: './parking-form.component.html',
  styleUrls: ['./parking-form.component.css']
})
export class ParkingFormComponent implements OnInit {

  model = new Parking(null, '', '');
  parkings = PARKINGS;


  ngOnInit() {
  }

  onSubmit() {
    console.log(this.model);
    this.parkings.push(this.model);
  }
}
