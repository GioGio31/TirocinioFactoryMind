import { Component, EventEmitter, Output, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ManagePersonService } from './person.service';
import { DatePipe } from '@angular/common';
import { NavigationService } from '../../app/navigation.service';

@Component({
  selector: 'app-person',
  standalone: true,
  imports: [ReactiveFormsModule, DatePipe],
  templateUrl: './person.component.html',
  styleUrl: './person.component.scss'
})
export class PersonFormComponent implements OnInit {


  @Output() public close = new EventEmitter();

  public constructor(
		private managePersonSvc: ManagePersonService,
    private navigationSvc: NavigationService
	){};

  public title = this.navigationSvc.title;

  formPerson: FormGroup = new FormGroup({
    name: new FormControl<string>('', [Validators.required]),
    surname: new FormControl<string>('', [Validators.required]),
    birthDate: new FormControl<Date>(new Date, [Validators.required]),
    address: new FormControl<string>('', [Validators.required]),
  });

  public ngOnInit(): void {
    if(this.navigationSvc.personId != -1){
      let personData = this.managePersonSvc.defaultPeople[this.navigationSvc.personId];
      this.formPerson.patchValue(personData);
    }
  }

  public confirmChanges(): void {
    let inputData = this.formPerson.value;
    if(this.navigationSvc.personId == -1){
      this.managePersonSvc.addNewPerson(
        inputData.name,
        inputData.surname,
        inputData.birthDate,
        inputData.address
      )
    } else {
      this.managePersonSvc.modifyPerson(
        this.navigationSvc.personId,
        inputData.name,
        inputData.surname,
        inputData.birthDate,
        inputData.address
      )
    }
    this.close.emit(true);
    this.navigationSvc.goFromFormToListOfPeople();
  }

  public discardChanges(): void {
    this.close.emit(true);
    this.navigationSvc.goFromFormToListOfPeople();
  }
}


