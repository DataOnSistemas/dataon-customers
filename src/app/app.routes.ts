import { Routes } from '@angular/router';
import { LoginComponent } from './security/login/login.component';
import { publicGuard } from './security/guards/public.guard';

export const routes: Routes = [
    { path: "login", component: LoginComponent, pathMatch: "full", canActivate: [publicGuard] },
];
