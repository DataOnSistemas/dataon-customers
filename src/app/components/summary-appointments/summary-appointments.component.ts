import { Component } from '@angular/core';
import { SharedCommonModule } from '../../shared/shared-common/shared-common.module';
import { AnimaisService } from '../../services/animais/animais.service';
import { AccordionModule } from 'primeng/accordion';

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
export class SummaryAppointmentsComponent {

}
