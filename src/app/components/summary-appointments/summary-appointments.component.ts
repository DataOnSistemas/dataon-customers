import { Component, OnInit } from '@angular/core';
import { SharedCommonModule } from '../../shared/shared-common/shared-common.module';
import { AnimaisService } from '../../services/animais/animais.service';
import { AccordionModule } from 'primeng/accordion';
import { CookieService } from 'ngx-cookie-service';
import { EnumCookie } from '../../services/cookies/cookie.enum';

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
    private readonly coockieService: CookieService
  ){}
  ngOnInit(): void {
    this.userData = JSON.parse(this.coockieService.get(EnumCookie.ALL_DATA));
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

  
}
