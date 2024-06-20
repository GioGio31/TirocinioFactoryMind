import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

export enum NavigationRoute{
  Login = 'login',
  ListOfPeople = 'peopleList',
  PersonForm = 'personForm',
  People = 'people',
  PageNotFound = '**'
}

@Injectable()
export class NavigationService{
  public personId = -1;
  public title = "Add user";

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

  public goFromFormToListOfPeople(): Promise<boolean> {
    return this.router.navigate([NavigationRoute.People, NavigationRoute.ListOfPeople]);
  }

  public goToPersonForm(id: number): Promise<boolean>{
    this.personId = id;
    if(this.personId == -1) {
      this.title = "Add user";
    } else {
      this.title = "Modify user";
    }
    return this.router.navigate([NavigationRoute.People, NavigationRoute.ListOfPeople, NavigationRoute.PersonForm])
  }

  public goToPageNotFound(): Promise<boolean>{
    return this.router.navigate([NavigationRoute.Login]);
  }
}
