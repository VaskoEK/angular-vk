import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  
  value = 'Clear me';
  value1 = '';
  value2 = '';
  value3 = '';

  checked = false;

  ngOnInit(): void {
    console.log('HOME INIT');
    
  }

  ngOnDestroy(): void {
    console.log('HOME DESTROY');
  }

}
