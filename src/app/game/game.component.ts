import { Component } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {

  images: string[] = ["assets/images/piedra.png", "assets/images/papel.png", "assets/images/tijeras.png"];
  pickIA: number = -1;
  pick: number = -1;
  msg: String = "IA Vs. Player!";

  userPick(pick:number){
    this.pick = pick - 1;
    this.pickIA = Math.floor(Math.random() * 3);
    switch(this.pickIA){
      case 1:
        this.msg = this.pick == 1 ? "Draw!" : this.pick == 2 ? "Player wins!" : "IA wins!";
        break;
      case 2:
        this.msg = this.pick == 2 ? "Draw!" : this.pick == 3 ? "Player wins!" : "IA wins!";
        break;
      case 3:
        this.msg = this.pick == 3 ? "Draw!" : this.pick == 1 ? "Player wins!" : "IA wins!";
        break;
    }
  }
}
