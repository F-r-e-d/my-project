import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParkingsComponent } from './parkings/parkings.component';
import { DetailComponent } from './detail/detail.component';
import { AddParkingComponent } from './add-parking/add-parking.component';

const routes: Routes = [
  { path: 'parkings', component: ParkingsComponent },
  { path: 'detail/:id', component: DetailComponent },
  { path: 'addparking', component: AddParkingComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }



