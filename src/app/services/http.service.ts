import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

    constructor(private _http: HttpClient) {
      // this.getTasks();
      // this.getTasks2();

    }
  getTasks(){
    
    return this._http.get(environment.serviceGetAll);
}

  getTasksById(id: String){
    let url= `${environment.serviceGetById}/${id}`;

    return this._http.get(url); 
  }
}