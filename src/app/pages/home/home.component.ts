import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { SharedCommonModule } from '../../shared/shared-common/shared-common.module';
import { TreeModule } from 'primeng/tree';
import { SidebarMenuItensComponent } from '../../components/sidebar-menu-itens/sidebar-menu-itens.component';
import { CookiesService } from '../../services/cookies/cookies.service';
import { EnumCookie } from '../../services/cookies/cookie.enum';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterOutlet, 
    SharedCommonModule, 
    TreeModule,
    SidebarMenuItensComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  public sidebarVisible: boolean = false;

  public selectdEmployee: any;

  public employees: any = []

  items: any[] = [
    {
      route: "dashboard",
      iconClass: 'do do-home',
      description: 'Inicio'
    },
    {
      route: "my-pets",
      iconClass: 'do do-pet',
      description: 'Meus pets'
    },
    {
      route: "profile",
      iconClass: 'do do-person',
      description: 'Meu cadastro'
    },
  ];

  
  constructor(
    private readonly router: Router,
    private readonly cookieService: CookiesService
  ){}

  ngOnInit(): void {
    this.employees = JSON.parse(this.cookieService.get(EnumCookie.COMPANIES));
    this.selectdEmployee = this.employees[0];
  }

  onOpenModal(): void {
    this.sidebarVisible = this.sidebarVisible ? false : true;
  }

  onRoute(route: String): void{
    this.router.navigate(['home',route]);
  }

}
