import { Component, OnInit } from '@angular/core';
import { AnimaisService } from '../../services/animais/animais.service';
import { CookieService } from 'ngx-cookie-service';
import { EnumCookie } from '../../services/cookies/cookie.enum';
import { CommonModule } from '@angular/common';
import { SharedCommonModule } from '../../shared/shared-common/shared-common.module';

@Component({
  selector: 'app-dash-pets',
  standalone: true,
  providers: [
    AnimaisService
  ],
  imports: [
    SharedCommonModule
  ],
  templateUrl: './dash-pets.component.html',
  styleUrl: './dash-pets.component.scss'
})
export class DashPetsComponent implements OnInit {

    public animais: any[] = [];
    private userData: any;

    constructor(
      private readonly animaisService: AnimaisService,
      private readonly coockieService: CookieService
    ){}

    ngOnInit(): void {
      this.userData = JSON.parse(this.coockieService.get(EnumCookie.ALL_DATA));
      this.onLoadAnimais();
    }

    onLoadAnimais(){
      this.animaisService.onLoadAnimais(this.userData.IDAtmus999,this.userData.IDPessoa).subscribe({
        next: (response) => {
          if(response.RetWm === 'success'){
            this.animais = response.obj;
          }
        },
        error: (error) => {
          console.log(error);
        }
      })
    }
}
