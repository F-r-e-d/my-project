import { Component, OnInit } from '@angular/core';
import { PARKINGS } from '../mock-parkings';
import { Parking } from '../parking';


@Component({
  selector: 'app-root',
  templateUrl: './parkings.component.html',
  styleUrls: ['./parkings.component.css']
})
export class ParkingsComponent implements OnInit {
  titleParkings:String = 'Liste de parking';
  parkings = PARKINGS;
 /* parkings: Parking[]; */

  selectedParking: Parking;

  constructor() { }

  ngOnInit() {

  }

  onSelect(parking: Parking): void {
    this.selectedParking = parking;
  }

}
