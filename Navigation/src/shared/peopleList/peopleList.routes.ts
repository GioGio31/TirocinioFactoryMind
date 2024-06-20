import { Routes } from "@angular/router";
import { PeopleComponent } from "./peopleList.component";
import { NavigationRoute } from "../../app/navigation.service";
import { PersonFormComponent } from "../person/person.component";

export const peopleListRoute: Routes = [
  { path: '', component: PeopleComponent },
  { path: NavigationRoute.PersonForm, loadChildren: () => import('../person/person.routes').then(m => m.personRoute) },
]
