import { Routes } from "@angular/router";
import { NavigationRoute } from "../../app/navigation.service";
import { LoginComponent } from "./form.component";

export const formRoute: Routes = [
  { path: '', component: LoginComponent}
]
