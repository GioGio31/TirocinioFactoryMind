import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginService } from './login.service';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  public constructor(
		private loginSvc: LoginService
	){};

  public form = new FormGroup({
    email: new FormControl<string>('', [Validators.required]),
    password: new FormControl<string>('', [Validators.required])
  });

  public valid = true;
  @Output() validOut = new EventEmitter<boolean>();

  public isValid(): boolean{
    this.valid = this.loginSvc.handleLogin(this.form.value.email, this.form.value.password);
    return this.valid;
  }


  public sendValid(): void{
    this.validOut.emit(this.valid)
  }
}
