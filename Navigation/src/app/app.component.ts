import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';
import { PeopleComponent } from './autentication/peopleList/peopleList.component';
import { ManagePersonService } from './autentication/person/person.service';
import { NavigationService } from '../shared/services/navigation/navigation.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LoginComponent, PeopleComponent, RouterModule],
  providers: [
    LoginService,
    ManagePersonService,
    NavigationService
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
