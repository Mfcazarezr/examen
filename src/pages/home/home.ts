import { Foto4Page } from './../foto4/foto4';
import { Disco4Page } from './../disco4/disco4';
import { JustinPage } from './../justin/justin';
import { Foto3Page } from './../foto3/foto3';
import { Resenas2Page } from './../resenas2/resenas2';
import { Foto2Page } from './../foto2/foto2';
import { Disco_2Page } from './../disco-2/disco-2';
import { ShakiraPage } from './../shakira/shakira';
import { Foto1Page } from './../foto1/foto1';
import { BrunomPage } from './../brunom/brunom';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Disco_1Page } from '../disco-1/disco-1';
import { ResenasbPage } from '../resenasb/resenasb';
import { MaronPage } from '../maron/maron';
import { Disco3Page } from '../disco3/disco3';
import { Resenas3Page } from '../resenas3/resenas3';
import { Resenas4Page } from '../resenas4/resenas4';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  brunos=BrunomPage;
  when=Disco_1Page;
  wheni=Foto1Page;
  res=ResenasbPage;
  shak=ShakiraPage;
  dia=Disco_2Page;
  diade=Foto2Page;
  rese=Resenas2Page;
  cinco=Disco3Page;
  cinco2=Foto3Page;
  resen=Resenas3Page;
  justins=JustinPage;
  bel=Disco4Page;
  live=Foto4Page;
  resena=Resenas4Page;
  mar=MaronPage;



  constructor(public navCtrl: NavController) {

  }
  bruno()
  {
    this.navCtrl.push(this.brunos);
  }
  disco1()
  {
    this.navCtrl.push(this.when);
  }
  foto1()
  {
    this.navCtrl.push(this.wheni);
  }
  resena1()
  {
    this.navCtrl.push(this.res);
  }
  shakira()
  {
    this.navCtrl.push(this.shak);
  }
  foto2()
  {
    this.navCtrl.push(this.diade);
  }
  disco2()
  {
    this.navCtrl.push(this.dia);
  }
  resena2()
  {
    this.navCtrl.push(this.rese);
  }
  MaronV()
  {
    this.navCtrl.push(this.mar);
  }
  disco3()
  {
    this.navCtrl.push(this.cinco);
  }
  foto3()
  {
    this.navCtrl.push(this.cinco2);
  }
  resena3()
  {
    this.navCtrl.push(this.resen);
  }
  justin()
  {
    this.navCtrl.push(this.justins);
  }
  disco4()
  {
    this.navCtrl.push(this.bel);
  }
  foto4()
  {
    this.navCtrl.push(this.live);
  }
  resena4()
  {
    this.navCtrl.push(this.resena);
  }

  

}
