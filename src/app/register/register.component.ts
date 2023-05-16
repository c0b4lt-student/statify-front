import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username: string ="";
  password: string ="";

  constructor(private http: HttpClient ) {  }
  save() {
    let bodyData = {
      "username" : this.username,
      "password" : this.password
    };
    this.http.post("https://anonomous.fr:8080/api/auth/register",bodyData,{responseType: 'text'}).subscribe((resultData: any)=>
    {
      console.log(resultData.jwtToken);
      alert("Compte créé");
    });
  }
}
