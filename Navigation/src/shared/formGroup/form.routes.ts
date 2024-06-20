import { Routes } from "@angular/router";
import { NavigationRoute } from "../../app/navigation.service";
import { LoginComponent } from "./form.component";
import { PeopleComponent } from "../peopleList/peopleList.component";

export const formRoute: Routes = [
  { path: '', component: LoginComponent},

]
