import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  fieldCount: number = 9;
  game: number[][] = [];
  activePlayerIndex: number = 1;

  constructor() { }

  generatePlayground() {
    this.game = [];
    for (let i = 0; i < 3; i++) {
      this.game.push([]);
      for (let j = 0; j < 3; j++) {
        this.game[i].push(0);
      }
    }
    console.log(this.game);
    
  }

  fieldPressed(i: number, j: number): void {
    this.game[i][j] = this.activePlayerIndex;
    this.switchPlayer();
    console.log(this.game);
    
  }

  switchPlayer() {
    if (this.activePlayerIndex === 1) {
      this.activePlayerIndex = 2;
    }
    else {
      this.activePlayerIndex = 1;
    }
  }
}
