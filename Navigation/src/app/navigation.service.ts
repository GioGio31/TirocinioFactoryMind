import { Injectable } from "@angular/core";
import { Route, Router } from "@angular/router";

export enum NavigationRoute{
  Login = 'login',
  ListOfPeople = 'peopleList',
  PersonForm = 'personForm',
  People = 'people',
  PageNotFound = '**'
}

@Injectable()
export class NavigationService{
  public constructor(private router: Router){}

  public goToLogin(): Promise<boolean> {
    return this.router.navigate([NavigationRoute.Login]);
  }

  public goToPeople(): Promise<boolean> {
    return this.router.navigate([NavigationRoute.People]);
  }

  public goToListOfPeople(): Promise<boolean> {
    return this.router.navigate([NavigationRoute.ListOfPeople]);
  }

  public GoToPersonForm(): Promise<boolean>{
    return this.router.navigate([NavigationRoute.PersonForm])
  }

  public goToPageNotFound(): Promise<boolean>{
    return this.router.navigate([NavigationRoute.Login]);
  }
}
