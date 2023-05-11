import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GameService } from 'src/app/core/services/game/game.service';
import { Coords } from 'src/app/core/types/coords.type';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss']
})
export class FieldComponent {

  @Input() lineBreakNeeded:boolean = false;
  @Input() index:number = 0;
  @Output() coords: EventEmitter<Coords> = new EventEmitter();

  fieldStatus:number = 0;

  constructor(private gameService: GameService){}

  fieldClicked():void{
    const coords:Coords = {
      i:Math.floor(this.index/3),
      j:this.index%3
    };
    const status = this.gameService.fieldPressed(coords.i,coords.j);
    if(status>0){
      this.fieldStatus = status;
    }
    this.coords.emit(coords);
  }

}
