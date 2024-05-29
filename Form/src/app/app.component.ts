import { Component } from '@angular/core';
import { ButtonComponent } from '../shared/button/button.component';
import { FormComponent } from '../shared/formGroup/form.component';
import { LoginService } from '../shared/formGroup/login.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ButtonComponent, FormComponent],
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
