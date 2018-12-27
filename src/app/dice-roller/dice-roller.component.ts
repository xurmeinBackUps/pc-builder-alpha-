import { Component } from '@angular/core';

@Component({
  selector: 'app-dice-roller',
  templateUrl: './dice-roller.component.html',
  styleUrls: ['./dice-roller.component.css']
})
export class DiceRollerComponent {
  die1 : number = (Math.floor(Math.random() * 6) + 1);
  die2 : number = (Math.floor(Math.random() * 6) + 1);
  die3 : number = (Math.floor(Math.random() * 6) + 1)
  die4 : number = (Math.floor(Math.random() * 6) + 1);

  constructor() { }

  rollAbilityScore() {
    let result = [this.die1, this.die2, this.die3, this.die4];
    console.log(result)
    return result
  }
}
