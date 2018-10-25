import { Resenas4Page } from './../pages/resenas4/resenas4';
import { Foto4Page } from './../pages/foto4/foto4';
import { Disco4Page } from './../pages/disco4/disco4';
import { JustinPage } from './../pages/justin/justin';
import { Foto3Page } from './../pages/foto3/foto3';
import { Resenas2Page } from './../pages/resenas2/resenas2';
import { Foto2Page } from './../pages/foto2/foto2';
import { ResenasbPage } from './../pages/resenasb/resenasb';
import { Foto1Page } from './../pages/foto1/foto1';
import { BrunomPage } from './../pages/brunom/brunom';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Disco_1Page } from '../pages/disco-1/disco-1';
import { ShakiraPage } from '../pages/shakira/shakira';
import { Disco_2Page } from '../pages/disco-2/disco-2';
import { MaronPage } from '../pages/maron/maron';
import { Disco3Page } from '../pages/disco3/disco3';
import { Resenas3Page } from '../pages/resenas3/resenas3';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    BrunomPage,
    Disco_1Page,
    Foto1Page,
    ResenasbPage,
    ShakiraPage,
    Foto2Page,
    Disco_2Page,
    Resenas2Page,
    MaronPage,
    Disco3Page,
    Foto3Page,
    Resenas3Page,
    JustinPage,
    Disco4Page,
    Foto4Page,
    Resenas4Page
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    BrunomPage,
    Disco_1Page,
    Foto1Page,
    ResenasbPage,
    ShakiraPage,
    Disco_2Page,
    Foto2Page,
    Resenas2Page,
    MaronPage,
    Disco3Page,
    Foto3Page,
    Resenas3Page,
    JustinPage,
    Disco4Page,
    Foto4Page,
    Resenas4Page

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
