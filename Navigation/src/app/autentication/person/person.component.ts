import { Component, EventEmitter, Output, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ManagePersonService } from './person.service';
import { DatePipe } from '@angular/common';
import { NavigationService } from '../../../shared/services/navigation/navigation.service';
import { ActivatedRoute } from '@angular/router';
import { Person } from '../../../shared/models/person.model';



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
    private navigationSvc: NavigationService,
    private route: ActivatedRoute
	){};



  formPerson: FormGroup = new FormGroup({
    name: new FormControl<string>('', [Validators.required]),
    surname: new FormControl<string>('', [Validators.required]),
    birthDate: new FormControl<Date>(new Date, [Validators.required]),
    address: new FormControl<string>('', [Validators.required]),
  });

  private personId = -1;
  public title = "";

  public ngOnInit(): void {
    this.personId = parseInt(this.route.snapshot.paramMap.get("id") || "-1");
    this.setTitle();
    if(this.personId != -1){
      let personData = this.managePersonSvc.defaultPeople[this.personId];

      const data = {
        ...personData,
        birthDate: personData.birthDate.toISOString().substring(0, 10)
      };
      this.formPerson.patchValue(data);
    }
  }

  public setTitle(){
    if(this.personId == -1){
      this.title = "Aggiungi utente";
    }else{
      this.title = "Modifica utente"
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
      this.managePersonSvc.modifyPerson(
        this.personId,
        inputData.name,
        inputData.surname,
        inputData.birthDate,
        inputData.address
      )
    }
    this.close.emit(true);
    this.navigationSvc.goToListOfPeople();
  }

  public discardChanges(): void {
    this.close.emit(true);
    this.navigationSvc.goToListOfPeople();
  }
}


