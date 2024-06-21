import { Routes } from "@angular/router";
import { NavigationRoute } from "../../shared/services/navigation/navigation.service";
import { LoginComponent } from "./login.component";
import { PeopleComponent } from "../autentication/peopleList/peopleList.component";

export const formRoute: Routes = [
  { path: '', component: LoginComponent},
]
