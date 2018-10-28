import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DetailComponent } from './detail/detail.component';
import { ParkingsComponent } from './parkings/parkings.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { ParkingFormComponent } from './parking-form/parking-form.component';
import { AddParkingComponent } from './add-parking/add-parking.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ParkingFormReactiveComponent } from './parking-form-reactive/parking-form-reactive.component';

@NgModule({
  declarations: [
    AppComponent,

    DetailComponent,

    ParkingsComponent,

    ParkingFormComponent,

    AddParkingComponent,

    ParkingFormReactiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
