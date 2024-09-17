import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../services/login/login.service';
import { Router, RouterModule } from '@angular/router';
import { CookiesService } from '../../services/cookies/cookies.service';
import { EnumCookie } from '../../services/cookies/cookie.enum';
import { Login } from '../../shared/interfaces/login';
import { SharedCommonModule } from '../../shared/shared-common/shared-common.module';

@Component({
  selector: 'app-login',
  standalone: true,
  providers: [
    LoginService
  ],
  imports: [
    SharedCommonModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  
  public loginForm!: FormGroup;
  public loading: Boolean = false;



  constructor(
    private readonly loginService: LoginService, 
    private readonly router: Router, 
    private readonly cookiesService: CookiesService,
    private readonly formBuilder: FormBuilder){
      
    }

  ngOnInit(): void {
      this.createForm();
  }

  private createForm() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', Validators.required)
    });
  }

  public onLogin(){
    this.loading = true;
    if (this.loginForm?.valid) {
      const loginData: Login = this.loginForm.value;

      this.loginService.login(loginData).subscribe(
        {
          next: (response) => {
            this.cookiesService.set(EnumCookie.AUTHORIZATION, response.info.AccessToken)
            this.router.navigate(['/home'])
            this.loading = false;
          },
          error: (err) => {
            this.loading = false;
          }
        }
      ); 

    }
  }

}
