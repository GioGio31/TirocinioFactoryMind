import { Component } from '@angular/core';
import { ButtonComponent } from '../shared/button/button.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ButtonComponent],
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
