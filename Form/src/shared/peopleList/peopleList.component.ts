import { Component, EventEmitter, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { PersonComponent } from '../person/person.component';

@Component({
  selector: 'app-peopleList',
  standalone: true,
  imports: [PersonComponent, ReactiveFormsModule],
  templateUrl: './peopleList.component.html',
  styleUrl: './peopleList.component.scss'
})
export class PeopleComponent implements OnInit, OnChanges {
  public person: Person;
  public clickedButton = 0;
  constructor(){
    this.person = {
      id: 0,
      name: '',
      surname: '',
      birthDate: '',
      address: ''
    }
  }
  public people: Person[] = [
      {
        id: 1,
        name: 'Pippo',
        surname: 'Pluto',
        birthDate: '21/05/2000',
        address: 'via pluto pippo'
      },
      {
        id: 2,
        name: 'Paperino',
        surname: 'Pluto',
        birthDate: '21/05/2000',
        address: 'via pluto pippo'
      }
  ];

  ngOnInit(): void {
    this.clearPersonForm();
  }

  ngOnChanges(changes: SimpleChanges): void {

  }




  public valid = true;
  @Output() validOut = new EventEmitter<boolean>();

  public deleteAlert(){
    alert()
  }

  public addPerson(){
    this.person.id = this.people.length
    this.people.push(this.person);
    this.clearPersonForm();
  }

  public modifyPerson(p: Person){
    this.person = JSON.parse(JSON.stringify(p));
  }

  public deletePerson(id: number){
    this.people.splice(id);
  }

  clearPersonForm(){
    this.person = {
      id: 0,
      name: '',
      surname: '',
      birthDate: '',
      address: ''
    }
  }

  public openForm(){

  }
}

interface Person {
  id: number;
  name: string;
  surname: string;
  birthDate: string;
  address: string;
}
