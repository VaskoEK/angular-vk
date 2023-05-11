import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/core/services/game/game.service';
import { Coords } from 'src/app/core/types/coords.type';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.scss']
})
export class PlaygroundComponent implements OnInit {

  // numbers: number[] = Array(9).fill(1);
  numbers:number[] = [];
  errorMessage: string = '';

  constructor(private gameService: GameService){}

  ngOnInit(){
    this.numbers = Array(this.gameService.fieldCount).fill(1);
    this.gameService.generatePlayground();
    this.gameService.errorMessage$.subscribe((res) => {
      this.errorMessage = res;
    })
  }

  restartGame():void{
    this.gameService.generatePlayground();
  }
  
}
