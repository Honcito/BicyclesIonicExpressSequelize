import { Injectable } from '@angular/core';
//Creamos un servicio
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BicycleService {

  // El método getBicycles() permite acceder a un end-point que nos devuelve un Array con las bicicletas
  endpoint = 'http://localhost:8080/api/bicycles';


  constructor(private httpClient: HttpClient) { }

  getBicycles() {
    return this.httpClient.get(this.endpoint);
  }
}
