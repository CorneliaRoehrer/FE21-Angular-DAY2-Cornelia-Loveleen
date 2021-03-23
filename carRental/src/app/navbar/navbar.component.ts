import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  buttonName:string;

  clickCounter = 0;

  


clickCount(){
    this.clickCounter = this.clickCounter + 10;
    // this.clickCounter += 10 ;
    //console.log(this.clickCounter)
  }
  constructor() { 

    this.buttonName = "Donate 10€"
  }

  

  ngOnInit(): void {
  }

}
