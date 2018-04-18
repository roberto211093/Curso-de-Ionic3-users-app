//esta pagina se encarga de renderizar las tareas
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Task } from './../../models/task.model';//Importamos el modelo
import { TasksProvider } from './../../providers/tasks/tasks';//Importamos el servicio

@IonicPage()
@Component({
  selector: 'page-tasks',
  templateUrl: 'tasks.html',
})
export class TasksPage {

  tasks: Task[] = [];//Usamos el modelo para declarar tasks como un array de Task y lo inicializamos vacio

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private tasksProvider: TasksProvider//inyecto el servicio
  ) {
  }

  ionViewDidLoad() {//Al cargar la pagina
    this.tasksProvider.getAll()//hacemos una solicitud de getAll()
    .subscribe(tasks => {//me subscribo para recibir todas las tareas, tasks me devuelve un Array
      this.tasks = tasks;//Apenas obtener la respuesta le asigno el Array, como los dos son del mismo tipo se van a asignar directamente, this.tasks espera un Array de tareas
    });
  }

  //updateTask recibe la tarea q queremos actualizar
  updateTask(task: Task, position: number){//recibe la tarea y la posicion
    console.log('antes', task);//Imprime la tarea como llega
    const updateTask = {//Creamos una constante para quitar la programacion reactiva
      ...task//creamos una copia de la tarea q nos esta llegando
    };
    updateTask.title = 'otro titulo';//Cambiamos el titulo
    this.tasksProvider.update(updateTask)//hacemos una solicitud de update()
    .subscribe(responseTask => {//Nos subscribimos para recibir la respuesta de servidor
      console.log('despues', responseTask);//mostramos la respuesta
      this.tasks[position] = responseTask;//Despues de de actualizar la tarea va a ir al array de tareas en la posicition recibida a actualizar la tarea que respondio el servidor
    });
  }

  deleteTask(task: Task, position: number) {//recibe la tarea y la posicion
    console.log('deleteTask');
    this.tasksProvider.remove(task)//hacemos una solicitud de remove()
    .subscribe(() => {//Nos subscribimos para recibir la respuesta de servidor
      this.tasks.splice(position, 1);//splice busca la posicion recibida y lo elimina del Array
    });
  }

}
