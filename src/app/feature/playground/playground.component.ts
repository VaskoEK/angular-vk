import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/core/services/game/game.service';
import { Coords } from 'src/app/core/types/coords.type';
import { FieldComponent } from '../field/field.component';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.scss']
})
export class PlaygroundComponent implements OnInit {

  numbers:number[] = [];
  errorMessage: string = '';
  rowCount: number = 3;
  rowBreaksAfterColumnCount: number = 3;
  lobbyId: number = 0;
  game:number[][] = []

  constructor(private gameService: GameService) {}

  ngOnInit(){
    this.gameService.game$.subscribe(res=>{
      this.game = res;
    })
    this.gameService.errorMessage$.subscribe((res) => {
      this.errorMessage = res;
    });
    this.gameService.fieldCount$.subscribe((res:number)=>{
      this.numbers = Array(res).fill(1);
      this.rowBreaksAfterColumnCount = Math.sqrt(res)

    })
  }

  newGame():void{
    this.lobbyId = this.gameService.generatePlayground(this.rowCount);
  }

  connectToLobby():void{
    this.gameService.joinLobby(this.lobbyId);
  }

}
