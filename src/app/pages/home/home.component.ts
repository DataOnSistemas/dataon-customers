import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { SharedCommonModule } from '../../shared/shared-common/shared-common.module';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, SharedCommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  public sidebarVisible: boolean = false;

  
  constructor(private readonly router: Router){
    
  }

  ngOnInit(): void {
    
  }

  onOpenModal(): void {
    this.sidebarVisible = this.sidebarVisible ? false : true;
  }

  onRoute(route: String): void{
    this.router.navigate(['home',route]);
  }

}
