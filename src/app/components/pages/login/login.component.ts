import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../../services/login/login.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  public isSubmited:boolean = false;
  public msg:string;
  public showAlert:boolean = false;
  public title = "AgileMovies";

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private _login: LoginService
    ) { }

  ngOnInit(): void {

    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  handleError(err) {
    this.msg = err.message;
    this.showAlert = true;
  }

  onLogin() {
    const { username, password } = this.loginForm.value;
    this._login.getAuth(username, password).subscribe(
      (res:any) => {
        sessionStorage.setItem('user', JSON.stringify(res.data.user));
        sessionStorage.setItem('refresh_token', res.data.payload.refresh_token);
        sessionStorage.setItem('token', res.data.payload.token);
        sessionStorage.setItem('type', res.data.payload.type);
        this.router.navigate(['home']);
      },
      error => {
        this.handleError(error);
      }
    )
  }

}
