import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeadsideComponent } from './headside/headside.component';
import { LandingComponent } from './landing/landing.component';
import { PlaceappComponent } from './placeapp/placeapp.component';
import { ViewappComponent } from './viewapp/viewapp.component';
import { SearchComponent } from './search/search.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppointmentServiceService } from './shared/appointment-service.service';
import { TrainerInfoService } from './shared/trainer-info.service';
import { ContactService } from './shared/contact.service';


@NgModule({
  declarations: [
    AppComponent,
    HeadsideComponent,
    LandingComponent,
    PlaceappComponent,
    ViewappComponent,
    SearchComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AppointmentServiceService, TrainerInfoService, ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
