import { Component, OnInit } from '@angular/core';
import { Dice } from './model/DiceModel';
import { Observable } from 'rxjs/Observable';
import { RollDiceService } from './Services/roll-dice.service';
import { MatSnackBar } from '@angular/material';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/zip';

@Component({
  selector: 'app-roll-dice',
  templateUrl: "./roll-dice.component.html",
  styleUrls: ['./roll-dice.component.css']
})
export class RollDiceComponent implements OnInit {

  dice$: Observable<Dice[]>;
  dice2$: Observable<Dice[]>;
  combineDice$: Observable<Dice[]>;
  diceSize = '3em';
  boxHeight = "100px";
  boxWidth = "100px";


  constructor(private diceservice: RollDiceService, public snackBar: MatSnackBar) {

  }

  ngOnInit() {
           
    this.dice$ = this.diceservice.subject;
    this.dice2$ = this.diceservice.subject2;
    this.combineDice$ = this.diceservice.combo$;
 
  }

  // emit(){
  //    this.diceservice.emitDice();
  // }

  rollDice() {
    this.diceservice.rollDice().then(data => {

      console.log('Dice roll done', data);


    });
  }

}
