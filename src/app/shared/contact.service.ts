import { Injectable } from '@angular/core';
import { ContactUs } from './contactus.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }
  private contacts : ContactUs[]=[
    new ContactUs("Salman","Sal@test.com","9222233333")
  ];
  
  uploadContact(contact: ContactUs){
    this.contacts.push(contact);
    this.http.put('https://ng-course-recipe-book-a3355-default-rtdb.firebaseio.com/contact.json',this.contacts)
        .subscribe( response =>{
            console.log(response);
        });

  }
}
