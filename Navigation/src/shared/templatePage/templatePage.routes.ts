import { Routes } from '@angular/router';
import { NavigationRoute } from '../../app/navigation.service';
import { TemplatePage } from './templatePage.component';

export const templateRoute: Routes = [
  { path: '', component: TemplatePage,
    children: [
      { path: NavigationRoute.ListOfPeople, loadChildren: () => import('../peopleList/peopleList.routes').then(m => m.peopleListRoute) },
      { path: NavigationRoute.PersonForm, loadChildren: () => import('../person/person.routes').then(m => m.personRoute) }
    ]
  },
]
