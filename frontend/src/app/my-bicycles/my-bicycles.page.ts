import { Component, OnInit } from '@angular/core';
import { BicycleService } from '../services/bicycle.service';

@Component({
  selector: 'app-my-bicycles',
  templateUrl: './my-bicycles.page.html',
  styleUrls: ['./my-bicycles.page.scss'],
})
export class MyBicyclesPage implements OnInit {

  bicycles: any = [];



  // Añadir un Array con información de bicicletas
  // bicycles: any = [
  //   {
  //     id: 1,
  //     brand: "BH",
  //     model: "star"
  //   },
  //   {
  //     id: 2,
  //     brand: "Orbea",
  //     model: "sky"
  //   }
  // ]

  constructor(private bicycleService: BicycleService) { }

  ngOnInit() {
    this.getAllBicycles();
  }

  getAllBicycles() {
    this.bicycleService.getBicycles().subscribe(response => {
      this.bicycles = response;
    });
  }

}
