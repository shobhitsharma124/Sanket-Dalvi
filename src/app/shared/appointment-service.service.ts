import { Injectable } from '@angular/core';
import {Appointment} from "./appointment.model"

@Injectable({
  providedIn: 'root'
})
export class AppointmentServiceService {

  constructor() { }

    private appointments : Appointment[]=[
      new Appointment('Ram, Age: (22) , Email: rMukh@test.com', 'Gokuldham, Powder Galli, Mumbai, Maharashtra, India', '1 Session', 'Trainer Preference: Male, Physio required: No', '9999999999'),
      new Appointment('Raani, Age: (42) , Email: rsaskh@test.com', 'Vikas villa, Goregaon, Mumbai, Maharashtra, India', '4 Sessions', 'Trainer Preference: Female, Physio required: Yes', '8888888888'),
      new Appointment('Daya, Age: (92) , Email: aswwd@test.com', 'Shagun nivas, Andheri, Mumbai, Maharashtra, India', '6 Sessions', 'Trainer Preference: Male, Physio required: No', '7777777777')
      
    ];

    getAppointments(){
      return this.appointments.slice();
    }
    
    addAppointment(appointment : Appointment){
      this.appointments.push(appointment);
    }
   
}
