//este servicio se va a encargar de consumir las tareas
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Task } from './../../models/task.model';//llamamos al modelo de tareas para decir luego al getAll() q me devuelva un Array de tareas

@Injectable()
export class TasksProvider {

  path = 'https://jsonplaceholder.typicode.com/todos';//Esto podriamos tenerlo en environment

  constructor(public http: HttpClient) {
    console.log('Hello TasksProvider Provider');
  }

  getAll(){
    //Peticion hacia el empoit
    return this.http.get<Task[]>(`${this.path}`);//Task[] Array de tareas
  }

  //Update tiene que tener unos parametros que seran el id de la tarea y la data q va a actualizar
  update(task: Task){
    //put para editar y <Task> para q me devuelva una tarea
    return this.http.put<Task>(`${this.path}/${task.id}`, task);//${task.id} es el id q quiero actualizar y task es la data
  }

  remove(task: Task) {
    //delete para eliminar
    return this.http.delete(`${this.path}/${task.id}`);//${task.id} es el id de la tarea q quiero eliminar
  }

}
