import { Component, Input, OnInit } from '@angular/core';
import { SharedCommonModule } from '../../shared/shared-common/shared-common.module';
import { Router } from '@angular/router';
import { DynamicQueryService } from '../../services/dynamic-query/dynamic-query.service';
import { EnumCookie } from '../../services/cookies/cookie.enum';
import { DynamicQuery } from '../../services/dynamic-query/dynamic-query';
import { onConvertDate } from '../../shared/util/util'
import { CookiesService } from '../../services/cookies/cookies.service';



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
    private readonly coockieService: CookiesService,
    private readonly router: Router
  ){}

  ngOnInit(): void {
    this.userData = this.coockieService.getObject(EnumCookie.CURRENT_COMPANY);
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

  onGetColorComponent(tid: any, route: number){
    let defaultClass = "timeline-item";
    switch(tid){
      case -70:
        return route === 1 ? `${defaultClass} consulta` : "do do-consulta";
      case -80:
        return route === 1 ? `${defaultClass} cirurgia` : "do do-cirurgia";
      case -90:
        return route === 1 ? `${defaultClass} exame` : "do do-exame";
      case -2:
        return route === 1 ? `${defaultClass} vacina` : "do do-vacina";
      case -3://vermifugo
        return "timeline vermifugo";
      case -100:
        return route === 1 ? `${defaultClass} pacote` : "do do-estetica";
      case -130:
        return route === 1 ? `${defaultClass} creche` : "do do-creche";
      case -4:
        return "timeline documento";
      case -9:
        return "timeline procedimento";
      case -110:
        return route === 1 ? `${defaultClass} hospedagem` : "do do-hospedagem";
      case -120:
        return route === 1 ? `${defaultClass} internamento` : "do do-internamento";
      case -11:
        return "timeline checklist";
      case -7:
        return "timeline orcamento";
      default:
        return "timeline"
    } 
  }

  onConvertDate(date: any) {
    return onConvertDate(date);
  }
  
}
