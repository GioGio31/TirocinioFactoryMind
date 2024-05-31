import { Component, EventEmitter, Output, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ManagePersonService } from './person.service';
import { Person } from '../models/person.interface';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-person',
  standalone: true,
  imports: [ReactiveFormsModule, DatePipe],
  templateUrl: './person.component.html',
  styleUrl: './person.component.scss'
})
export class PersonFormComponent implements OnInit {

  public choice = "Visualizzazione utenti";

  @Input() personId = -1;
  @Input() title = "";
  @Output() public close = new EventEmitter();

  public constructor(
		private managePersonSvc: ManagePersonService
	){};

  formPerson: FormGroup = new FormGroup({
    name: new FormControl<string>('', [Validators.required]),
    surname: new FormControl<string>('', [Validators.required]),
    birthDate: new FormControl<Date>(new Date, [Validators.required]),
    address: new FormControl<string>('', [Validators.required]),
  });

  ngOnInit(): void {
    if(this.personId != -1){
      let personData = this.managePersonSvc.people[this.personId];
      alert(personData);
      this.formPerson.patchValue(personData);
    }
  }

  public confirmChanges(){
    let inputData = this.formPerson.value;
    if(this.personId == -1){
      this.managePersonSvc.addNewPerson(
        inputData.name,
        inputData.surname,
        inputData.birthDate,
        inputData.address
      )
    } else {
      alert("Id in person: "+inputData.id)
      this.managePersonSvc.modifyPerson(
        this.personId,
        inputData.name,
        inputData.surname,
        inputData.birthDate,
        inputData.address
      )
    }
    this.close.emit(true);
  }

  public discardChanges(){
    this.close.emit(true);
  }

  public getPeople(): Person[]{
    return this.managePersonSvc.getPeople();
  }

}


