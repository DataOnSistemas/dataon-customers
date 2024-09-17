import { CommonModule, NgClass, NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar-menu-itens',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
   
  ],
  templateUrl: './sidebar-menu-itens.component.html',
  styleUrl: './sidebar-menu-itens.component.scss'
})
export class SidebarMenuItensComponent {

  @Input() menuItems: any;
}
