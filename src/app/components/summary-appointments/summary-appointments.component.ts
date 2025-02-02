import { Component, OnInit } from '@angular/core';
import { SharedCommonModule } from '../../shared/shared-common/shared-common.module';
import { AnimaisService } from '../../services/animais/animais.service';
import { AccordionModule } from 'primeng/accordion';
import { EnumCookie } from '../../shared/services/cookies/cookie.enum';
import { Router } from '@angular/router';
import { CookiesService } from '../../shared/services/cookies/cookies.service';

@Component({
  selector: 'app-summary-appointments',
  standalone: true,
  providers: [
    AnimaisService
  ],
  imports: [
    SharedCommonModule,
    AccordionModule
  ],
  templateUrl: './summary-appointments.component.html',
  styleUrl: './summary-appointments.component.scss'
})
export class SummaryAppointmentsComponent implements OnInit {


  public appointments: any[] = [];
  private userData: any;

  constructor(
    private readonly animaisService: AnimaisService,
    private readonly coockieService: CookiesService,
    private readonly router: Router
  ){}
  ngOnInit(): void {
    this.userData = this.coockieService.getObject(EnumCookie.CURRENT_COMPANY);
    this.onLoadSummaryAppointments();
  }


  onLoadSummaryAppointments(){
    this.animaisService.onLoadSummaryAppointments(this.userData.IDAtmus999,this.userData.IDPessoa).subscribe({
      next: (response) => {
        if(response.result){
          this.appointments = response.result;
        }
      },
      error: (error) => {
        console.log(error);
      }
    })
  }

  onLoadTimeLine(id: any) {
    this.router.navigate(['home','timeline',id]);
  }


}
