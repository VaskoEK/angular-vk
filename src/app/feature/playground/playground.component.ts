import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/core/services/game/game.service';
import { Coords } from 'src/app/core/types/coords.type';
import { FieldComponent } from '../field/field.component';

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

  constructor(private gameService: GameService){}

  disabled = false;
  max = 15;
  min = 0;
  showTicks = false;
  step = 1;
  thumbLabel = false;

  ngOnInit(){
    this.gameService.generatePlayground(this.rowCount);
    this.gameService.errorMessage$.subscribe((res) => {
      this.errorMessage = res;
    });
    this.gameService.fieldCount$.subscribe((res:number)=>{
      this.numbers = Array(res).fill(1);
      this.rowBreaksAfterColumnCount = Math.sqrt(res)

    })
  }

  newGame():void{
    this.gameService.generatePlayground(this.rowCount);
    
  }
  
}
