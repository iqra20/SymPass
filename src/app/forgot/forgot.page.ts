import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.page.html',
  styleUrls: ['./forgot.page.scss'],
})
export class ForgotPage implements OnInit {

  mail:String;

  constructor() { }

  ngOnInit() {
  }

  sendMail(){
    fetch("http://3.124.237.156:8080/recover", {
      "method": "POST",
      "body": JSON.stringify({
        "email": this.mail
      })
    })
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      });
  }

}
