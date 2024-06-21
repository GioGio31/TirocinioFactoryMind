import { Routes } from "@angular/router";
import { PeopleComponent } from "./peopleList.component";
import { NavigationRoute } from "../../../shared/services/navigation/navigation.service";
import { PersonFormComponent } from "../person/person.component";

export const peopleListRoute: Routes = [
  { path: '', component: PeopleComponent }
]
