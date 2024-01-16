import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  route:string = "/src/assets/images/"
  names: string[] = [];
  pics: string[] = [];
  descriptions: string[] = [];
  ages: number[] = [];

  semen: person = new person("sexo", "/assets/images/49.png", "chocho", 3);
  ppl: person[] = [];

  ngOnInit(): void {

  }

}

class person {
  name:string;
  pic:string;
  description:string;
  age:number;

  constructor(name: string, pic: string, description: string, age: number) {
    this.name = name;
    this.pic = pic;
    this.description = description;
    this.age = age;
  }

}