import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../services/login/login.service';
import { Router, RouterModule } from '@angular/router';
import { CookiesService } from '../../services/cookies/cookies.service';
import { EnumCookie } from '../../services/cookies/cookie.enum';
import { Login } from '../../shared/interfaces/login';
import { SharedCommonModule } from '../../shared/shared-common/shared-common.module';
import { ToastService } from '../../services/toast/toast.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  standalone: true,
  providers: [
    LoginService, ToastService
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
    private readonly toastService: ToastService,
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

  public onLogin(isReset: number){
    
    if (this.loginForm?.valid) {
      this.loading = true;
      const loginData: Login = this.loginForm.value;
      loginData.isReset = isReset;

      this.loginService.login(loginData).subscribe(
        {
          next: (response) => {
            if(response.RetWm === 'success'){
              this.cookiesService.set(EnumCookie.AUTHORIZATION, response.info.AccessToken);
              this.cookiesService.set(EnumCookie.COMPANIES, JSON.stringify(response.info.MultiEmpresa));
              this.cookiesService.set(EnumCookie.ALL_DATA, JSON.stringify(response.info));
              this.router.navigate(['/home']);
            } else if(response.RetWm === 'reset'){
              this.toastService.error({summary: 'Login', detail: 'Foi enviado a nova senha ao email ou telefone adicionado ao campo login'});
            } else {
              this.toastService.error({summary: 'Login', detail: response.info});
            }
            
            this.loading = false;
          },
          error: (err) => {
            this.loading = false;
          }
        }
      ); 

    } else {
      this.toastService.warn({summary: 'Login', detail: 'Existem campos inválidos'});
    }
  }

}
