import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { SharedCommonModule } from '../../shared/shared-common/shared-common.module';
import { TreeModule } from 'primeng/tree';
import { SidebarMenuItensComponent } from '../../components/sidebar-menu-itens/sidebar-menu-itens.component';
import { CookiesService } from '../../shared/services/cookies/cookies.service';
import { EnumCookie } from '../../shared/services/cookies/cookie.enum';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';


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


  isMobile: boolean = false;

  public sidebarVisible: boolean = false;

  public selectdEmployee: any;

  public employees: any = [];

  public loginData: any = {};

  items: any[] = [
    {
      route: "dashboard",
      iconClass: 'do do-home',
      description: 'Inicio'
    },
    {
      route: "timeline",
      iconClass: 'do do-timeline',
      description: 'TimeLIne'
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
    private readonly cookieService: CookiesService,
    private breakpointObserver: BreakpointObserver
  ){}

  ngOnInit(): void {
    this.breakpointObserver.observe([Breakpoints.Handset]).subscribe(r => {
      this.isMobile = r.matches;
    });
    this.employees = JSON.parse(this.cookieService.get(EnumCookie.COMPANIES));
    this.selectdEmployee = this.employees[0];
    this.cookieService.setObject(EnumCookie.CURRENT_COMPANY,this.selectdEmployee);
    this.loginData = JSON.parse(this.cookieService.get(EnumCookie.ALL_DATA));
  }

  onOpenModal(): void {
    this.sidebarVisible = this.sidebarVisible ? false : true;
  }

  onRoute(route: String): void{
    this.router.navigate(['home',route]);
  }

  onLogout() {
    this.cookieService.delete(EnumCookie.ALL_DATA);
    this.cookieService.delete(EnumCookie.AUTHORIZATION);
    this.cookieService.delete(EnumCookie.COMPANIES);
    this.cookieService.delete(EnumCookie.CURRENT_COMPANY);
    this.router.navigate(['login']);
  }

  onSelected(e: any){
    this.cookieService.setObject(EnumCookie.CURRENT_COMPANY,e.value);
  }

}
