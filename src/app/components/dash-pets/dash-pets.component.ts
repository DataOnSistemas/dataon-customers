import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AnimaisService } from '../../services/animais/animais.service';
import { EnumCookie } from '../../shared/services/cookies/cookie.enum';
import { SharedCommonModule } from '../../shared/shared-common/shared-common.module';
import { CookiesService } from '../../shared/services/cookies/cookies.service';

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
export class DashPetsComponent implements OnInit, OnChanges {

    public animais: any[] = [];
    private userData: any;
    @Input() reload: any;

    constructor(
      private readonly animaisService: AnimaisService,
      private readonly coockieService: CookiesService
    ){}


    ngOnInit(): void {
      this.onLoadData();
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

    ngOnChanges(changes: SimpleChanges): void {
      this.onLoadData();
    }

    onLoadData(){
      this.userData = this.coockieService.getObject(EnumCookie.CURRENT_COMPANY);
      this.onLoadAnimais();
    }
}
