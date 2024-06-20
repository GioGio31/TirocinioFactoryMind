import { Component } from '@angular/core';
import { LoginComponent } from '../shared/formGroup/form.component';
import { LoginService } from '../shared/formGroup/login.service';
import { PeopleComponent } from '../shared/peopleList/peopleList.component';
import { ManagePersonService } from '../shared/person/person.service';
import { NavigationService } from './navigation.service';
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
