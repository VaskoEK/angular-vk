import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  fieldCount: number = 9;
  game: number[][] = [];
  activePlayerIndex:number = 1;

  private errorMessage = new BehaviorSubject<string>('');
  errorMessage$ = this.errorMessage.asObservable();

  private gameEnded = new BehaviorSubject<boolean>(false);
  gameEnded$ = this.gameEnded.asObservable();

  constructor() { }

  generatePlayground():void{
    this.game = [];
    for(let i=0; i<3; i++){
      this.game.push([]);
      for(let j=0; j<3; j++){
        this.game[i].push(0);
      }
    }
  }

  fieldPressed(i:number, j:number):number{
    let status = this.activePlayerIndex;
    if (this.game[i][j] === 0) {
      this.game[i][j] = this.activePlayerIndex;
      this.errorMessage.next("");
      this.switchPlayer();
      if(this.checkifWon(i,j)){
        console.log("nyertél");
      }else{
        this.checkIfFinished();
      }

      console.log(this.game);
      }else{
        this.errorMessage.next("Nem kattinthatsz erre a mezőre!");
        console.log('Hibás kattintás');
        status = -1;
      }
      return status;
  }

  checkifWon(i:number, j:number):boolean{
    let won:boolean = false;
    if(this.game[i].indexOf(0) < 0 && this.game[i].indexOf(this.getNextPlayer())<0 ){
      won = true;
    }
    else if( this.game[0][j] === this.activePlayerIndex && this.game[1][j] === this.activePlayerIndex && this.game[2][j] === this.activePlayerIndex){
      won = true;
    }else if(
      ((i === 0 || i===2)&& (j===0 || j=== 2) ||
      (i=== 1 && j === 1))
      ){
      won = this.checkDiagonal();
    }
    return won;
  }

  checkDiagonal():boolean{
    let won = false;
    for(let i=0; i<3; i++){
      for(let j=0; j<3; j++){
         if(  this.game[i][j] !== this.activePlayerIndex  ){

         }
      }
    }


    return won;
  }

  checkIfFinished():void{
    console.log(JSON.stringify(this.game));
    if(JSON.stringify(this.game).indexOf("0") < 0 ){
      alert("DÖNTETLEN!");
    }
  }

  getNextPlayer():number{
    let nextPlayer: number = -1;
    if(this.activePlayerIndex === 1){
      nextPlayer= 2;
    }else{
      nextPlayer = 1;
    }
    return nextPlayer;
  }
  switchPlayer():void{
    if(this.activePlayerIndex === 1){
      this.activePlayerIndex = 2;
    }else{
      this.activePlayerIndex = 1;
    }
  }
}