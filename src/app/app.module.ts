import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';//para poder hacer solicitudes desde mi app
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { UsersProvider } from '../providers/users/users';
import { TasksProvider } from '../providers/tasks/tasks';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  //providers son clases q nos permiten injectarlos a los demas componentes
  //con el patron singleton, es decir, una vez inyectadas no se vuelven a
  //injectar, se reutiliza la misma instancia para toda la app
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UsersProvider,
    TasksProvider,
  ]
})
export class AppModule {}
