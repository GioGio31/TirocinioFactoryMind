import { Injectable } from "@angular/core";
import { Person } from '../models/person.interface';

@Injectable()
export class ManagePersonService{
  public people: Person[] = [
    {
      id: 1,
      name: 'Mario',
      surname: 'Rossi',
      birthDate: new Date(),
      address: 'Trento'
    },
    {
      id: 2,
      name: 'Giuseppe',
      surname: 'Verdi',
      birthDate: new Date(),
      address: 'Genova'
    },
    {
      id: 3,
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
    this.people[this.people.findIndex(p => p.id == id)] = {
      id: id,
      name: name,
      surname: surname,
      birthDate: birthDate,
      address: address
    }
  }

  public deletePerson(id: number){
    this.people.splice(id, 1);
  }
}
