import { Component } from '@angular/core';
import { DashPetsComponent } from "../../components/dash-pets/dash-pets.component";
import { SummaryAppointmentsComponent } from "../../components/summary-appointments/summary-appointments.component";
import { PromotionsComponent } from "../../components/promotions/promotions.component";
import { CardsCompaniesComponent } from "../../components/cards-companies/cards-companies.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    DashPetsComponent,
    SummaryAppointmentsComponent,
    PromotionsComponent,
    CardsCompaniesComponent
],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
