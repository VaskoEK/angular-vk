import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  game: number[][] = [];
  activePlayerIndex:number = 1;

  private errorMessage = new BehaviorSubject<string>('');
  errorMessage$ = this.errorMessage.asObservable();

  private gameEnded = new BehaviorSubject<boolean>(false);
  gameEnded$ = this.gameEnded.asObservable();

  private fieldCount = new BehaviorSubject<number>(9);
  fieldCount$ = this.fieldCount.asObservable();

  countToWin:number = 3;

  constructor() { }

  generatePlayground(rowCount:number):void{
    this.fieldCount.next(rowCount*rowCount);
    this.game = [];
    this.activePlayerIndex = 1;
    for(let i=0; i<rowCount; i++){
      this.game.push([]);
      for(let j=0; j<rowCount; j++){
        this.game[i].push(0);
      }
    }
    // console.log(this.game);
    
  }

  fieldPressed(i:number, j:number):number{
    let status = this.activePlayerIndex;
    console.log("coords: ",i,",",j);
    if (this.game[i][j] === 0) {
      this.game[i][j] = this.activePlayerIndex;
      this.errorMessage.next("");
      this.switchPlayer();
      const winner = this.checkifWon(i,j);
      if(winner){
        console.log("A nyertes a ",winner, ". számú játékos");
        alert("A nyertes a "+winner+ ". számú játékos");
      }else if(this.checkIfFinished()){
        console.log("Döntetlen");
        alert("Döntetlen");
      }
      console.log(this.game);
    }else{
      this.errorMessage.next("Nem kattinthatsz erre a mezőre!");
      console.log('Hibás kattintás');
      status = -1;
    }
    return status;
  }

  checkifWon(oldRow:number, oldCol:number):number{
    const n  = this.game.length;

    const player  = this.game[oldRow][oldCol];
    if(player === 0){
      return 0;
    }

    const directions = [
      [0,1], // vízszintes (balról jobbra)
      [1,0], // függőleges (fentről le)
      [1,1], // bal fentről jobb lefele átló
      [1,-1] // jobb fentről bal lefele átló
    ]

    for(const [dx, dy] of directions){
      let count = 1;

      for(let i = 1; i<this.countToWin; i++){
        let newRow = oldRow+i*dx;
        let newCol = oldCol+i*dy;
        if(newRow<0 || newRow >= n || newCol<0 ||newCol >=n|| this.game[newRow][newCol] !== player ){
          break;
        }
        count++;
      }

      for(let i = 1; i<this.countToWin; i++){
        let newRow = oldRow-i*dx;
        let newCol = oldCol-i*dy;

        if(newRow<0 || newRow >= n || newCol<0 ||newCol >=n || this.game[newRow][newCol] !== player){
          break;
        }
        count++;
      }

      if(count >=this.countToWin){
        return player;
      }
    }
    return 0;
  }


  checkIfFinished():boolean{
    return this.game.every(row=>!row.includes(0));
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