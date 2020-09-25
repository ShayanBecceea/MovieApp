import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  showPassword: boolean = false;

  form = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ])

   });
    constructor(private router:Router) { }


    ngOnInit() {
    }

    public togglePassword(): void {
      this.showPassword = !this.showPassword;
    }

    onSubmit(){
      /*this.router.navigateByUrl('/movie');*/
    }


}
