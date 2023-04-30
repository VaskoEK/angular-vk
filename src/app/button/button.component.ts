import { Component } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  isClicked: boolean = false;
  responseReceived: boolean = false;

  buttonClicked() {
    this.isClicked = true;

    setTimeout(()=>{
      this.responseReceived = true;

    }, 5000);
  }

}
