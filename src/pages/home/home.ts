import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';//LoadingController muestra un loading mientras hace la peticion

import { UsersProvider } from './../../providers/users/users';//traemos el servicio

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  users: any[] = [];//creamos un array de users, hacemos un array de cualquier objeto

  constructor(
    public navCtrl: NavController,
    private loadingCtrl: LoadingController,//lo inyectamos como dependencia
    private userProvider: UsersProvider//lo inyectamos como dependencia
  ) {

  }

  ionViewDidLoad(){//Disparador de ionic, nos dice si la pagina ya esta activa o no, q es como si la pagina ya esta cargada puedo empezar a hacer peticiones a los providers
    const loading = this.loadingCtrl.create({
      content: 'Cargando usuarios'
    });
    loading.present();//presentamos el loading
    //setTimeout(() => {

      this.userProvider.getAllUsers(20)//carga 20 usuarios haciendo una solicitud
      .subscribe((response: any) => {//me subscribo para obtener la respuesta
        loading.dismiss();//Ocultamos el Loading
        //console.log(response);
        this.users = response.results;//Guardamos los users, q se encuentra en una parte de su respuesta que es results
      });

    //}, 5000);
    

  }

  goToTasksPage(){
    this.navCtrl.push('TasksPage');//Navegamos hacia TasksPage
  }

}
