import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {
  @Input() public type = '';
  @Input() public placeholder = '';
  @Input() public title = '';
  public valueIn = '';

  @Output() public valueOut = new EventEmitter<string>();
  public sendValue(): void{
    this.valueOut.emit(this.valueIn)
  }


}
