import { Routes } from '@angular/router';
import { NavigationRoute } from './navigation.service';
import { LoginComponent } from '../shared/formGroup/form.component';

export const routes: Routes = [
  { path: NavigationRoute.Login, component: LoginComponent },
  // { path: NavigationRoute.ListOfPeople, loadChildren: () => import('../shared/peopleList/peopleList.routes').then(m => m.peopleListRoute) },
  //{ path: NavigationRoute.PageNotFound,  redirectTo: NavigationRoute.Login }
  { path: NavigationRoute.People, loadChildren: () => import('../shared/templatePage/templatePage.routes').then(m => m.teplateRoute) },

];
