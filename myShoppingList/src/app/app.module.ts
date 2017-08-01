import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListasPage } from '../pages/listas/listas';
import { ListaPage } from '../pages/lista/lista';
import { SupermercadosPage } from '../pages/supermercados/supermercados';
import { NuevoSupermercadoModalPage } from '../pages/nuevoSupermercadoModal/nuevoSupermercadoModal'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RestProvider } from '../providers/rest/rest';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListasPage,
    ListaPage,
    SupermercadosPage,
    NuevoSupermercadoModalPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListasPage,
    ListaPage,
    SupermercadosPage,
    NuevoSupermercadoModalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestProvider
  ]
})
export class AppModule {}
