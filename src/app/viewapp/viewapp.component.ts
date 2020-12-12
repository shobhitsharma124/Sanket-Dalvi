import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgModule,  } from '@angular/core';
import { AppointmentServiceService } from '../shared/appointment-service.service';
import { Appointment } from '../shared/appointment.model';

@Component({
  selector: 'app-viewapp',
  templateUrl: './viewapp.component.html',
  styleUrls: ['./viewapp.component.css'],
  
})
export class ViewappComponent implements OnInit {

  appointments? :Appointment[];
  constructor(private appointmentService: AppointmentServiceService) { }

  ngOnInit(): void {
    this.appointments = this.appointmentService.getAppointments();
  }

}
