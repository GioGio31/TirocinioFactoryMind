import { Component, DoCheck, EventEmitter, Input, KeyValueDiffers, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { PersonFormComponent } from '../person/person.component';
import { Person } from '../models/person.interface';
import { ManagePersonService } from '../person/person.service';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-peopleList',
  standalone: true,
  imports: [PersonFormComponent, ReactiveFormsModule, DatePipe],
  providers: [],
  templateUrl: './peopleList.component.html',
  styleUrl: './peopleList.component.scss'
})
export class PeopleComponent {
  public personId: number = -1;
  public clickedButton = 0;

  public constructor(
		private managePersonSvc: ManagePersonService,
	){};

  @Input() public people = this.managePersonSvc.getPeople();

  public close = true;
  public closeForm(close: boolean): void {
    this.close = close;
    this.setPersonId(-1);
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

  public getPeople(): Person[]{
    return this.managePersonSvc.getPeople();
  }

  public deletePerson(id: number): void {
    this.managePersonSvc.deletePerson(this.personId);
  }
}


