import { Component, OnInit,Input } from '@angular/core';
import { Parking } from "../parking";
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PARKINGS } from '../mock-parkings';

/* import { HeroService }  from '../hero.service'; */

@Component({
  selector: 'app-detailParking',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  @Input() parking: Parking;
  parkings = PARKINGS;

  constructor(
    private route: ActivatedRoute,
    private location: Location
    ) {}

    ngOnInit(): void {
      this.getParking();
    }

    getParking(): void {
      const id = +this.route.snapshot.paramMap.get('id');
      for (let i = 0; i < this.parkings.length; i++) {
        if (this.parkings[i].id === id) {
          this.parking = this.parkings[i];
        }

      }

    }

  }

