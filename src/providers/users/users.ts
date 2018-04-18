import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class UsersProvider {

  //Inyectamos el httpClient
  constructor(public http: HttpClient) {
  }

  //Creamos una instancia
  getAllUsers(results: number) {
    //results es un parametro de entrada
    //get con la url a la q le voy a pegar
    return this.http.get(`https://randomuser.me/api/?results=${results}`);
    //https://randomuser.me/documentation
  }

}
