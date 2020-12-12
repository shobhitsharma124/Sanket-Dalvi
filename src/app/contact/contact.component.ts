import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactUs } from '../shared/contactus.model';
import { ContactService } from '../shared/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
  }

  onContactSubmit(form :NgForm){
    const value = form.value;
    const name = value.fname + " " + value.lname; 
    const email = value.email;
    const phone = value.phone;
    const contact  = new ContactUs(name,email,phone);

    this.contactService.uploadContact(contact);
    form.reset();
    alert("Thank you! Your response has been recorded.")
    
  }

}
