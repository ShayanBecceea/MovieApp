import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router,ActivatedRoute  } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthServiceService } from '../../services/auth-service.service';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  returnUrl: string;
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

    constructor(private router:Router,private route: ActivatedRoute,private http: HttpClient, private AuthServiceService:AuthServiceService,public translate: TranslateService) { }

    ngOnInit() {}

    public togglePassword(): void {
      this.showPassword = !this.showPassword;
    }

    get email(){
      return this.form.get('email');
    }

    get password(){
      return this.form.get('password');
    }

    get controls() {
      return this.form.controls;
    }

    onSubmit(){
      this.AuthServiceService.login(this.controls.email.value, this.controls.password.value)
      .pipe()
      .subscribe(data => {
        this.router.navigate(['/movie']);
      });
    }

    switchLanguage(language:string) {
      this.translate.use(language);
    }
  }


  /*

  onSubmit(){
    this.router.navigate(["/movie"]);
    localStorage.setItem('token', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWNjZXNzIjp0cnVlLCJleHBpcmVzX2F0IjoiMjAyMC0wOS0yOCAxMTo0MTozMSBVVEMiLCJyZXF1ZXN0X3Rva2VuIjoiODkwNmJiODFlOGIwM2I4ZDIxMTBlZmIxNjI4ZjdhNGM2N2E5ZTJiMiJ9.-2GvBouSLgD8ATGwWe28mXxvJCwe4a8DveQ7mCosN7s");
  }

  */

