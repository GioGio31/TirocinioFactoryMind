import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NavigationService } from '../../../shared/services/navigation/navigation.service';
import { LoginComponent } from '../../login/login.component';
import { LoginService } from '../../login/login.service';
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

  public goToListOfPeople(){
    this.navigationSvc.goToListOfPeople();
  }
}
