import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {
  rentalCars = [
    {
      img: "./assets/img/porsche.jpg",
      brand: "Porsche",
      model: "Cayenne",
      year: 2021,
      price: 90
    }, {
      img: "./assets/img/tesla.jpg",
      brand: "Tesla",
      model: "S-Modell",
      year: 2020,
      price: 100
    }, {
      img: "./assets/img/mercedes.jpg",
      brand: "Mercedes",
      model: "A 220",
      year: 2020,
      price: 65
    }
  ]
  
  constructor(){}

  ngOnInit(): void {
  }

}



// var car = [new rentalCar("./assets/img/porsche.jpg", "Porsche", "Cayenne", 2021, 90), new rentalCar("./assets/img/tesla.jpg", "Tesla", "S-Modell", 2020, 100), new rentalCar("./assets/img/mercedes.jpg", "Mercedes", "A 220", 2020, 65)];

// for (let val of car) {
//   document.getElementById("insertCard").innerHTML += val.showCarsCard();
// }