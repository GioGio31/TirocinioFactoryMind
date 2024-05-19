import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputComponent } from '../inputField/input.component';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [InputComponent, FormsModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  public email = '';
  public pwd = '';

  public getEmail(email: string): void{
    this.email = email;
  }

  public getPwd(pwd: string): void{
    this.pwd = pwd;
  }

  @Output() validOut = new EventEmitter<boolean>();
  public sendValid(): void{
    this.validOut.emit(
      (this.email=="admin@admin.com") && (this.pwd=="admin")
    )
  }
}
