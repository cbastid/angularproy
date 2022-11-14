import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
    this.getTasks();
   

   }

getTasks(){
  // nuestra respuesta HTTP es un Observable, así que almacénala en una variable
  let tempObservable = this._http.get(environment.serviceGetAll);
  // suscribe a la Observable y proporciona el código que nos gustaría hacer con nuestros datos desde la respuesta
  tempObservable.subscribe(data => console.log("Got our tasks!", data));
}
// getTasks2(){
//   // nuestra respuesta HTTP es un Observable, así que almacénala en una variable
//   let tempObservable = this._http.get(environment.service2GetAll);
//   // suscribe a la Observable y proporciona el código que nos gustaría hacer con nuestros datos desde la respuesta
//   tempObservable.subscribe(data => console.log("Got our tasks!", data));
// }
}
