import { Component } from "@angular/core";
import { PersonFormComponent } from "./person.component";
import { Routes } from "@angular/router";

export const PersonRoute: Routes = [
  { path: '', component: PersonFormComponent },
]
