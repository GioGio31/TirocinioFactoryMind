import { Component, DoCheck, EventEmitter, Input, KeyValueDiffers, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { PersonFormComponent } from '../person/person.component';
import { ManagePersonService } from '../person/person.service';
import { DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavigationService } from '../../../shared/services/navigation/navigation.service';


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

  private personId = -1;

  public people = this.managePersonSvc.getPeople();
  public close = true;

  public modifyPerson(clickedButton: number, id: number): void{
    this.setClickedButton(clickedButton);
    this.setPersonId(id);
    console.log(id);
    this.navigationSvc.goToPersonForm(this.personId);
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
    this.personId = personId;
  }

  public deletePerson(): void {
    this.managePersonSvc.deletePerson(this.personId);
  }
}

