import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registrationObj: any = {
    "registrationId": 0,
    "name": "",
    "mobileNo": "",
    "emailId": "",
    "linkdinProfileUrl": "",
    "isWorking": false,
    "collegeName": "",
    "city": "",
    "gender": ""
  }

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

  }

  onResister() {

    this.http.post("https://freeapi.miniprojectideas.com/api/Webinar/CreateRegistration", this.registrationObj).subscribe((res: any) => {
      if (res.result) {
        alert(res.message)
      } else {
        alert(res.message)
      }
    })
  }

  onReset() {
    this.registrationObj = {
      "registrationId": 0,
      "name": "",
      "mobileNo": "",
      "emailId": "",
      "linkdinProfileUrl": "",
      "isWorking": false,
      "collegeName": "",
      "city": "",
      "gender": ""
    }
  }




}
