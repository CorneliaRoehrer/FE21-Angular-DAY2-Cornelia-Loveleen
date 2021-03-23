import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})

export class ContactUsComponent implements OnInit {
  contactForm = new FormGroup({
    firstName: new FormControl("",Validators.required),
    lastName: new FormControl("",Validators.required),
    age: new FormControl("",Validators.required),
    driverLicenseNumber: new FormControl("",Validators.required),
    eMailAdress: new FormControl("",Validators.required),
  });
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.contactForm.valid){
    var a = this.contactForm.value;
    console.log(a)
    }
  }
}
