import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Appointment } from '../shared/appointment.model';
import { AppointmentServiceService } from '../shared/appointment-service.service';

@Component({
  selector: 'app-placeapp',
  templateUrl: './placeapp.component.html',
  styleUrls: ['./placeapp.component.css']
})
export class PlaceappComponent implements OnInit {
  @ViewChild('f') slForm?: NgForm;
  amount :any;
  text: any ;


  

  constructor(private appointmentService: AppointmentServiceService) { }

  ngOnInit(): void {
  }

  onSubmit(form :NgForm){
    const value = form.value;
    const name = value.fname + " " + value.lname +", Age: (" +value.age+") " +", Email: "+value.email;  
    const phone = value.phone;
    const fullAddress = value.address + "," + value.city + "-" + value.zip + "," + value.state + "," + value.country;
    const trainerPref = value.gender;
    const physioPref = value.physio;
    const trainer = "Trainer Preference: " + trainerPref + ", "+ "Physio required: " + physioPref
    var trainerPackage ='';
    if(value.package =="Other"){
      trainerPackage = value.other + " Sessions";
    }
    else{
      trainerPackage = value.package;
    }

    const appointment = new Appointment(name,fullAddress,trainerPackage,trainer,phone);
    this.appointmentService.addAppointment(appointment);
    form.reset();

    
  }

  calculateAmt(amt : number){
    if(amt==0){
      this.amount = null;
      this.text = "Payable amount will be informed via Phone Call";
    }
    else if(amt==1){
      this.amount = "Rs.500/-";
      this.text =null;
    }
    else if(amt==2){
      this.amount = "Rs.400/-";
      this.text =null;
    }
    else if(amt==3){
      this.amount = "Rs.300/-";
      this.text =null;
    }
    else{
      this.amount = 0;
    }
    
    
  }
}
