import { Routes } from '@angular/router';
import { PeopleComponent } from '../peopleList/peopleList.component';
import { NavigationRoute } from '../../app/navigation.service';
import { TemplatePage } from './templatePage.component';

export const teplateRoute: Routes = [
  { path: '', component: TemplatePage,
    children: [
      { path: NavigationRoute.ListOfPeople, component: PeopleComponent },
      { path: NavigationRoute.PersonForm, loadChildren: () => import('../person/person.routes').then(m => m.PersonRoute) }
    ]
  }
]
