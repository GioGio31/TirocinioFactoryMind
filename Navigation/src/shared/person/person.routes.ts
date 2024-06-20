import { Component } from "@angular/core";
import { PersonFormComponent } from "./person.component";
import { Routes } from "@angular/router";
import { NavigationRoute } from "../../app/navigation.service";

export const personRoute: Routes = [
  { path: '', component: PersonFormComponent },
  { path: NavigationRoute.ListOfPeople, loadChildren: () => import('../peopleList/peopleList.routes').then(m => m.peopleListRoute) }
]

