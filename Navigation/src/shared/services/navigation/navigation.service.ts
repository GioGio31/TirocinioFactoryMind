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
  public title = "";

  public constructor(private router: Router){}

  public goToLogin(): Promise<boolean> {
    return this.router.navigate([NavigationRoute.Login]);
  }

  public goToPeople(): Promise<boolean> {
    return this.router.navigate([NavigationRoute.People]);
  }

  public goToListOfPeople(): Promise<boolean> {
    return this.router.navigate([NavigationRoute.People, NavigationRoute.ListOfPeople]);
  }

  public goToPersonForm(id: number): Promise<boolean>{
    if(this.personId == -1) {
      this.title = "Aggiungi utente";
    } else {
      this.title = "Modifica utente";
    }
    return this.router.navigate([NavigationRoute.People, NavigationRoute.PersonForm, id])
  }

}
