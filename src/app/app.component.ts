import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';

import { RouterOutlet } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

import { Interceptor } from './config/interceptor/interceptor';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from './config/http/http.module';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HttpClientModule,
    ToastModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Interceptor,
      multi: true
    },
    MessageService
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'dataon-customers';
}
