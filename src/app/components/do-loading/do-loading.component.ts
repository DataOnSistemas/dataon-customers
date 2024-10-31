import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-do-loading',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './do-loading.component.html',
  styleUrl: './do-loading.component.scss'
})
export class DoLoadingComponent {
  @Input() show: boolean = false;
}
