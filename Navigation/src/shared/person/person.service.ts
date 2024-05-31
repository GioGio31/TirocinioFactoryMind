import { Injectable } from "@angular/core";
import { Person } from '../models/person.interface';

@Injectable()
export class ManagePersonService{
  public defaultPeople: Person[] = [
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
    return this.defaultPeople;
  }

  public addNewPerson(
    name: string,
    surname: string,
    birthDate: Date,
    address: string
  ): void {
    this.defaultPeople.push(
      {
        id: this.defaultPeople.length + 1,
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
  ): void {
    console.log(this.defaultPeople);
    console.log("id: " + id);
    console.log("name: " + name);
    if(id >= 0 && id < this.defaultPeople.length){
      this.defaultPeople[id] = {
        id: id,
        name: name,
        surname: surname,
        birthDate: birthDate,
        address: address
      }
    }
    console.log(this.defaultPeople);
  }

  public deletePerson(id: number): void {
    if(id > 0 && id < this.defaultPeople.length){
      this.defaultPeople.splice(id, 1);
    }
  }
}
