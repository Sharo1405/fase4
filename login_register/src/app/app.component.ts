import { Component, ViewChild } from '@angular/core';
import { Platform, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Storage } from '@ionic/storage';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('content') nav: NavController;
  rootPage:any;// = LoginPage;

  constructor(
    public platform: Platform, 
    public statusBar: StatusBar, 
    public splashScreen: SplashScreen, 
    private storage: Storage) {
    /*platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      /*statusBar.styleDefault();
      splashScreen.hide();*/
    //});
    this.initializeApp();
  }

  initializeApp(){
    this.platform.ready().then(() => {      
    this.statusBar.styleDefault();
      this.splashScreen.hide();
    });


    this.storage.get('session_storage').then((res)=>{
      if(res == null){
        this.rootPage = LoginPage;
      }else{
        this.rootPage = HomePage;
      }
    });

  }
}

