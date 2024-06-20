import { Component, DoCheck, EventEmitter, Input, KeyValueDiffers, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { PersonFormComponent } from '../person/person.component';
import { ManagePersonService } from '../person/person.service';
import { DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavigationService } from '../../app/navigation.service';


@Component({
  selector: 'app-peopleList',
  standalone: true,
  imports: [PersonFormComponent, ReactiveFormsModule, DatePipe, RouterModule],
  providers: [],
  templateUrl: './peopleList.component.html',
  styleUrl: './peopleList.component.scss'
})
export class PeopleComponent {
  public clickedButton = 0;

  public constructor(
		private managePersonSvc: ManagePersonService,
    private navigationSvc: NavigationService
	){};

  public people = this.managePersonSvc.getPeople();
  public close = true;
  public closeForm(): void {
    this.close = true;
    this.setPersonId(-1);
    this.navigationSvc.goToListOfPeople();
  }

  public modifyPerson(clickedButton: number, id: number): void{
    this.setClickedButton(clickedButton);
    this.setPersonId(id);
    this.navigationSvc.goToPersonForm(this.navigationSvc.personId);
  }

  public deletePersonFromList(clickedButton: number, id: number): void{
    this.setClickedButton(clickedButton);
    this.setPersonId(id);
    this.deletePerson();
  }

  public setClickedButton(clickedButton: number): void {
    this.clickedButton = clickedButton;
    if(clickedButton == 1 || clickedButton == 3){
      this.close = false;
    }
  }

  public setPersonId(personId: number): void {
    this.navigationSvc.personId = personId;
  }

  public deletePerson(): void {
    this.managePersonSvc.deletePerson(this.navigationSvc.personId);
  }
}
// @if(clickedButton == 1 && !close){
//   <app-person [personId]="personId" [title]="" (close)="closeForm($event)"></app-person>
// }
// @else if(clickedButton == 3 && !close){
//   <app-person [personId]="personId" [title] = "'Aggiungi nuovo utente'" (close)="closeForm($event)"></app-person>
// }

