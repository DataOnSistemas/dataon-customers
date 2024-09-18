import { Component } from '@angular/core';
import { DashPetsComponent } from "../../components/dash-pets/dash-pets.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    DashPetsComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
