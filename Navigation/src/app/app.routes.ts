import { Routes } from '@angular/router';
import { NavigationRoute } from '../shared/services/navigation/navigation.service';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  { path: NavigationRoute.Login, component: LoginComponent },
  { path: NavigationRoute.People, loadChildren: () => import('./autentication/templatePage/templatePage.routes').then(m => m.templateRoute) },
  { path: NavigationRoute.PageNotFound, redirectTo: NavigationRoute.Login }
];
