import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.page.html',
  styleUrls: ['./forgot.page.scss'],
})
export class ForgotPage implements OnInit {

  mail:String;
  status:number;

  constructor(private toastCtrl: ToastController) { }

  ngOnInit() {
  }

  presentToast(status) {
    const toast = document.createElement('ion-toast');
    if(status==200){
      toast.message = 'The mail has been sent';
    }else{
      toast.message = 'There is no account with this email';
    }
    toast.duration = 2000;
  
    document.body.appendChild(toast);
    return toast.present();
  }
  sendMail(){
    console.log(this.mail);
    fetch("http://3.124.237.156:8080/recover", {
      "method": "POST",
      "headers": {
        'Content-Type': 'application/json'
      },
      "body": JSON.stringify({
        "email": this.mail
      })
    })
      .then(response => {
        console.log(response);
        this.status=response.status;
        console.log(this.status);
        this.presentToast(this.status);
      })
      .catch(err => {
        console.log(err);
      });
      
  }

}
