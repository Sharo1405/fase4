import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { PostProvider } from '../../providers/post-provider';
import { Storage } from '@ionic/storage';

import { RegisterPage } from '../register/register';
import { HomePage } from '../home/home';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  username: string = "";
  password: string = "";

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public toastCtrl: ToastController,
    public postPvdr: PostProvider,
    public storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(){
    if(this.username != "" && this.password != ""){
      let body = {
        username: this.username,
        password: this.password,
        aksi: 'login'
      };

      this.postPvdr.postData(body, 'file_aksi.php').subscribe((data)=>{
        var alertpesan = data.msg;

        if(data.success){
          this.storage.set('session_storage', data.result);
          this.navCtrl.setRoot(HomePage);
          const toast = this.toastCtrl.create({
            message: 'LOGIN EXITOOOOOO!!!!!!',
            duration: 3000
          });
          toast.present();
        }else{
          const toast = this.toastCtrl.create({
            message: alertpesan,
            duration: 3000
          });
          toast.present();
        }
      });


    }else{
      const toast = this.toastCtrl.create({
        message: 'username or password invalid',
        duration: 3000
      });
      toast.present();
    }
  }


  formRegister(){
    this.navCtrl.push(RegisterPage);
  }


}
