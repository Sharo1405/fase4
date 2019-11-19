import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
//import { LoginPage } from '../login/login';
import { PostProvider } from '../../providers/post-provider';


/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  full_name: string = "";
  phone_number: string = "";
  username: string = "";
  password: string = "";
  confirm_password: string = "";

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public toastCtrl: ToastController,
    private postPvdr: PostProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  addRegister(){
    console.log(this.full_name);

    if(this.full_name ==""){

      //presentToast(){
        const toast = this.toastCtrl.create({
          message: 'Name is required',
          duration: 3000
        });
        toast.present();
      //}

    }else if(this.phone_number ==""){

      //presentToast(){
        const toast = this.toastCtrl.create({
          message: 'Phone number is required',
          duration: 3000
        });
        toast.present();
      //}

    }else if(this.username ==""){

      //presentToast(){
        const toast = this.toastCtrl.create({
          message: 'Username is required',
          duration: 3000
        });
        toast.present();
      //}


    }else if(this.password ==""){

      //presentToast(){
        const toast = this.toastCtrl.create({
          message: 'Password is required',
          duration: 3000
        });
        toast.present();
      //}


    }else if(this.password != this.confirm_password){

        //presentToast(){
          const toast = this.toastCtrl.create({
            message: 'Passwords arent equals',
            duration: 3000
          });
          toast.present();
        //}
  
    }else{

      let body = {
        full_name: this.full_name,
        phone_number: this.phone_number,
        username: this.username,
        password: this.password,
        aksi: 'add_register'
      };
      
      this.postPvdr.postData(body, 'file_aksi.php').subscribe((data)=>{
        var alertpesan = data.msg;

        if(data.success){
          this.navCtrl.pop();
          const toast = this.toastCtrl.create({
            message: 'EXITOOOOOO!!!!!!',
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
    }
  }


  formLogin(){
    //this.navCtrl.push(LoginPage);
    this.navCtrl.pop();
  }

  
}
