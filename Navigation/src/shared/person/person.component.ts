import { Component, EventEmitter, Output, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ManagePersonService } from './person.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-person',
  standalone: true,
  imports: [ReactiveFormsModule, DatePipe],
  templateUrl: './person.component.html',
  styleUrl: './person.component.scss'
})
export class PersonFormComponent implements OnInit {

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

  public ngOnInit(): void {
    if(this.personId != -1){
      let personData = this.managePersonSvc.defaultPeople[this.personId];
      this.formPerson.patchValue(personData);
    }
  }

  public confirmChanges(): void {
    let inputData = this.formPerson.value;
    if(this.personId == -1){
      this.managePersonSvc.addNewPerson(
        inputData.name,
        inputData.surname,
        inputData.birthDate,
        inputData.address
      )
    } else {
      alert("Id in person: "+this.personId)
      console.log("Name: " + inputData.name)
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

  public discardChanges(): void {
    this.close.emit(true);
  }
}


