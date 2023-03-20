import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  inputByUser: string = "";
  array: number[] = [];
  activeImageNumber: number = 0;


  inputChange1(): void {

    console.log(this.inputByUser);

    this.array = [];

    if (Number(parseInt(this.inputByUser)) <= 0 ) {
      this.inputByUser = "1";
    }
    if (Number(parseInt(this.inputByUser)) >= 4) {
      this.inputByUser = "4";
    }

    for (let i = 1; i <= Number(this.inputByUser); i++) {
      this.array.push(i);
    }
    console.log(this.array);

    
    this.activeImageNumber = 1;
  }

  leftButtonClicked(): void {

    let pic_nr = this.activeImageNumber - 1;
            
    if (pic_nr < this.array[0]) {
      this.activeImageNumber = this.array[this.array.length - 1];
    }
    else {
      this.activeImageNumber = pic_nr;
    }
  }

  rightButtonClicked(): void {

    let pic_nr = this.activeImageNumber + 1;
            
    if (pic_nr > this.array[this.array.length - 1]) {
      this.activeImageNumber = 1;
    }
    else {
      this.activeImageNumber = pic_nr;
    }
  }
}
