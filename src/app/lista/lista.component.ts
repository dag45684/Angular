import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  route:string = "assets/images/"
  names: string[] = [];
  pics: string[] = [];
  descriptions: string[] = [];
  ages: number[] = [];

  ppl: person[] = [];

  ngOnInit(): void {
    this.names = ["pepe", "pipi", "papo", "pepo"];
    this.pics = ["47.png", "48.png", "49.png", "50.png"];
    this.descriptions = ["I hate this language so much is unreal", "yea me too bruh", "damn this class rocks god damn cant wait to join a counsultant company and end my life front-ending things", "i dunno what to say"];
    this.ages = [13,15,71,31];
    for (let i=0; i<this.names.length; i++) {
      this.ppl.push(new person(this.names[i], this.route+this.pics[i], this.descriptions[i], this.ages[i]));
    }
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