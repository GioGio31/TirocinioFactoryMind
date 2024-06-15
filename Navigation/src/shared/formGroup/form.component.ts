import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { NavigationService } from '../../app/navigation.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class LoginComponent {
  public constructor(
		private loginSvc: LoginService,
    private navigationSvc: NavigationService
	){};

  public form = new FormGroup({
    email: new FormControl<string>('', [Validators.required]),
    password: new FormControl<string>('', [Validators.required])
  });

  public valid = true;
  @Output() validOut = new EventEmitter<boolean>();

  public isValid(): void{
    this.valid = this.loginSvc.handleLogin(this.form.value.email, this.form.value.password);
  }

  public sendValid(): void{
    this.validOut.emit(this.valid)
  }

  public goToListOfPeople(): void{
    this.isValid()
    if(this.valid){
      this.navigationSvc.goToListOfPeople();
    }
  }
}
