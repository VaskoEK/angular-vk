import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GameService } from 'src/app/core/services/game/game.service';
import { Coords } from 'src/app/core/types/coords.type';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss']
})
export class FieldComponent implements OnInit {

  @Input() lineBreakNeeded:boolean = false;
  @Input() index:number = 0;
  @Output() coords: EventEmitter<Coords> = new EventEmitter();
  @Input() fieldStatus:number = 0;
  rowCount:number = 3;

  constructor(private gameService: GameService){}

  ngOnInit(){
    this.gameService.fieldCount$.subscribe((res:number)=>{
      this.rowCount = Math.sqrt(res);
    })
  }

   async fieldClicked(){
    const coords:Coords = {
      i:Math.floor(this.index/this.rowCount),
      j:this.index%this.rowCount
    };
    const status = await this.gameService.fieldPressed(coords.i,coords.j);
    if(status>0){
      this.fieldStatus = status;
    }
    this.coords.emit(coords);
  }
  
}
