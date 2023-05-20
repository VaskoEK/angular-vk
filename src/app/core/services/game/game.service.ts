import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, first, firstValueFrom, lastValueFrom, take } from 'rxjs';
import { MultiplayerService } from '../multiplayer/multiplayer.service';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  gameSubj: BehaviorSubject<number[][]> = new BehaviorSubject([[1]]);
  game$ = this.gameSubj.asObservable();
  activePlayerIndex:number = 2;

  private errorMessage = new BehaviorSubject<string>('');
  errorMessage$ = this.errorMessage.asObservable();

  private gameEnded = new BehaviorSubject<boolean>(false);
  gameEnded$ = this.gameEnded.asObservable();

  private fieldCount = new BehaviorSubject<number>(9);
  fieldCount$ = this.fieldCount.asObservable();


  countToWin:number = 3;
  winner: number = 0;
  gameId: number = 0;


  constructor(private multiplayer: MultiplayerService) {
  }


  generatePlayground(rowCount:number):number{
    this.fieldCount.next(rowCount*rowCount);
    this.winner = 0;
    let game: number[][] = [];
    this.activePlayerIndex = 2;
    for(let i=0; i<rowCount; i++){
      game.push([]);
      for(let j=0; j<rowCount; j++){
        game[i].push(0);
      }
    }
    this.gameSubj.next(game);
    this.gameId = Math.floor(Math.random()*100000000);
    this.multiplayer.createLobby(this.gameId, game);
    this.multiplayer.joinLobby(this.gameId).subscribe((res:any)=>{
      this.gameSubj.next(JSON.parse(res[0]));
      this.switchPlayer();
      console.log(res[0]);
    });
    return this.gameId;
  }


  joinLobby(lobbyId:number){
    this.gameId = lobbyId;
    this.multiplayer.joinLobby(this.gameId).subscribe((res:any)=>{
      this.gameSubj.next(JSON.parse(res[0]));
      this.switchPlayer();
      console.log(res[0]);
    });
  }

  async fieldPressed(i:number, j:number):Promise<number>{
    let status;
    if(!this.winner){
      status = this.activePlayerIndex;
      console.log("coords: ",i,",",j);

      let game:number[][] = [];
      game = this.gameSubj.getValue();
      if (game[i][j] === 0) {
        game[i][j] = this.activePlayerIndex;
        this.gameSubj.next(game);
        if(this.gameId){
          this.multiplayer.updateGameState(this.gameId, game);
        }
        this.errorMessage.next("");
        const winner = this.checkifWon(i,j);
        if(winner){
          console.log("A nyertes a ",winner, ". számú játékos");
          alert("A nyertes a "+winner+ ". számú játékos");
          this.winner = winner;
        }else if(this.checkIfFinished()){
          console.log("Döntetlen");
          alert("Döntetlen");
        }

      }else{
        this.errorMessage.next("Nem kattinthatsz erre a mezőre!");
        console.log('Hibás kattintás');
        status = -1;
      }
    }else{
      status = -1;
    }
    return status;

  }

    checkifWon(oldRow:number, oldCol:number):number{

      let game:number[][] = [];
      this.game$.pipe(take(1)).subscribe((res)=>{game = res});

      const n  = game.length;
      const player  = game[oldRow][oldCol];
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
          if(newRow<0 || newRow >= n || newCol<0 ||newCol >=n|| game[newRow][newCol] !== player ){
            break;
          }
          count++;
        }

        for(let i = 1; i<this.countToWin; i++){
          let newRow = oldRow-i*dx;
          let newCol = oldCol-i*dy;

          if(newRow<0 || newRow >= n || newCol<0 ||newCol >=n || game[newRow][newCol] !== player){
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
    let game:number[][] = [];
    this.game$.pipe(take(1)).subscribe((res)=>{game = res});
    return game.every(row=>!row.includes(0));
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
    console.log(this.activePlayerIndex);
  }
}