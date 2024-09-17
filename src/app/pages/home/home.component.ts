import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { SharedCommonModule } from '../../shared/shared-common/shared-common.module';
import { TreeModule } from 'primeng/tree';
import { SidebarMenuItensComponent } from '../../components/sidebar-menu-itens/sidebar-menu-itens.component';


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

  public employees: any = [
    { name: 'New York', code: 'NY' },
  ]

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
