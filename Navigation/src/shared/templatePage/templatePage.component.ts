import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NavigationService } from '../../app/navigation.service';
import { LoginComponent } from '../formGroup/form.component';
import { LoginService } from '../formGroup/login.service';
import { PeopleComponent } from '../peopleList/peopleList.component';
import { ManagePersonService } from '../person/person.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LoginComponent, PeopleComponent, RouterModule],
  providers: [
    LoginService,
    ManagePersonService,
    NavigationService
  ],
  templateUrl: './templatePage.component.html',
  styleUrl: './templatePage.component.scss'
})
export class TemplatePage {
  public constructor (
    private navigationSvc: NavigationService
  ){}

  public addNewPerson(){
    this.navigationSvc.goToListOfPeople
  }

  public modifyPerson(){

  }
}
