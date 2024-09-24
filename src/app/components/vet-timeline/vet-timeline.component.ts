import { Component, Input, OnInit } from '@angular/core';
import { SharedCommonModule } from '../../shared/shared-common/shared-common.module';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { DynamicQueryService } from '../../services/dynamic-query/dynamic-query.service';
import { EnumCookie } from '../../services/cookies/cookie.enum';
import { DynamicQuery } from '../../services/dynamic-query/dynamic-query';

@Component({
  selector: 'app-vet-timeline',
  standalone: true,
  imports: [
    SharedCommonModule
  ],
  providers: [
    DynamicQueryService
  ],
  templateUrl: './vet-timeline.component.html',
  styleUrl: './vet-timeline.component.scss'
})
export class VetTimelineComponent implements OnInit {

  public timelineItems: any[] = [];
  private userData: any;
  private dynamicParams: DynamicQuery = new DynamicQuery();

  @Input() idAnimal: any;

  constructor(
    private readonly dynamicQuery: DynamicQueryService,
    private readonly coockieService: CookieService,
    private readonly router: Router
  ){}

  ngOnInit(): void {
    this.userData = JSON.parse(this.coockieService.get(EnumCookie.ALL_DATA));
    this.getDynamic();
    this.onLoad();
  }

  onLoad(){

    this.dynamicQuery.onDynamicQueryByContext(this.dynamicParams).subscribe({
      next: (response) => {
        if(response.RetWm === 'success'){
          this.timelineItems = response.paging.data;
        }
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

  getDynamic(){
    this.dynamicParams.doID = this.userData.IDAtmus999;
    this.dynamicParams.context = "Mural.VetTimeLine";
    this.dynamicParams.criterion = `${this.idAnimal}, -1000, ${this.userData.IDPessoa}|-1|0|-1`;
  }

  onGetColorComponent(tid: any){
    switch(tid){
      case -70:
        return "timeline consulta";
      case -80:
          return "timeline cirurgia";
      case -90:
        return "timeline exame";
      case -2:
        return "timeline vacina"; 
      case -3://vermifugo
        return "timeline vermifugo";
      case -100:
        return "timeline pacote";
      case -130:
        return "timeline creche";
      case -4:
        return "timeline documento";
      case -9:
        return "timeline procedimento";
      case -110:
        return "timeline hospedagem";
      case -120:
        return "timeline internamento";
      case -11:
        return "timeline checklist";
      case -7:
        return "timeline orcamento";
      default:
        return "timeline"
    }
  }
  
}
