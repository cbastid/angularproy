import { Component } from '@angular/core';
import { HttpService } from './services/http.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Proyecto Angular';
  tasks: any = {}
  tasks2: any = {}
  listaTareas: boolean = false
  soloUno : boolean = false

  constructor(private _httpService: HttpService) { }
  ngOnInit() {
   
  }
  getTasksFromService() {
    let observable = this._httpService.getTasks();
    observable.subscribe(data => {
      console.log("Got our tasks1!", data)
      // En este ejemplo, el array de tareas se asigna a la clave "tasks" en el objeto de datos.
      // Esto puede ser diferente para ti, según cómo configuras tu tarea API.
      this.tasks = data;
      this.listaTareas = true;
      this.soloUno = false;
    });
  }
  getTasksById(id: String) {
    let observable = this._httpService.getTasksById(id);
    observable.subscribe(data => {
      console.log("Got our tasks2!", data)
      // En este ejemplo, el array de tareas se asigna a la clave "tasks" en el objeto de datos.
      // Esto puede ser diferente para ti, según cómo configuras tu tarea API.
      this.tasks2 = data;
      this.soloUno = true;

    });
  }

}



