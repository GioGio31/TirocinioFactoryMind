import { Component, EventEmitter, Output, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-person',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './person.component.html',
  styleUrl: './person.component.scss'
})
export class PersonComponent {

  public choice = "Visualizzazione utenti";

  @Input() userId = -1;
  @Output() public close = new EventEmitter();
  // public constructor(
	// 	private managePersonSvc: ManagePersonService
	// ){};

  formPerson: FormGroup = new FormGroup({
      name: new FormControl<string>('', [Validators.required]),
      surname: new FormControl<string>('', [Validators.required]),
      birthDate: new FormControl<Date>(new Date, [Validators.required]),
      address: new FormControl<string>('', [Validators.required]),
    });

  public confirmChanges(){
    this.close.emit();
  }

  public discardChanges(){
    this.close.emit();
  }




  public getPersonById(){
    this.formPerson.patchValue({

    })
  }

  public displayAlert(){
    alert("Ciao");
  }
}


