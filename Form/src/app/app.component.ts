import { Component } from '@angular/core';
import { FormComponent } from '../shared/formGroup/form.component';
import { LoginService } from '../shared/formGroup/login.service';
import { PeopleComponent } from '../shared/peopleList/peopleList.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormComponent, PeopleComponent],
  providers: [
    LoginService
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Form';
  public valid = false;

  public validCredential(valid: boolean): void{
    this.valid = valid;
  }
}
