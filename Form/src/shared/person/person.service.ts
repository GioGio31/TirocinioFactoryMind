import { Injectable } from "@angular/core";
import { Person } from '../models/person.interface';

@Injectable()
export class ManagePersonService{
  public people: Person[] = [
    {
      id: 0,
      name: 'Mario',
      surname: 'Rossi',
      birthDate: new Date(),
      address: 'Trento'
    },
    {
      id: 1,
      name: 'Giuseppe',
      surname: 'Verdi',
      birthDate: new Date(),
      address: 'Genova'
    },
    {
      id: 2,
      name: 'Cesare',
      surname: 'Augusto',
      birthDate: new Date(),
      address: 'Roma'
    }
  ];

  public getPeople(): Person[] {
    return this.people;
  }

  public addNewPerson(
    name: string,
    surname: string,
    birthDate: Date,
    address: string
  ){
    this.people.push(
      {
        id: this.people.length +1,
        name: name,
        surname: surname,
        birthDate: birthDate,
        address: address
      }
    )
  }

  public modifyPerson(
    id: number,
    name: string,
    surname: string,
    birthDate: Date,
    address: string
  ){
    this.people[id] = {
      id: id,
      name: name,
      surname: surname,
      birthDate: birthDate,
      address: address
    }
    alert(this.people[this.people.findIndex(p => p.id == id)].id);
    console.log(this.people);
  }

  public deletePerson(id: number){
    this.people.splice(id, 1);
  }
}
