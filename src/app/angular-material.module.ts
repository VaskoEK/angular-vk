import { NgModule } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatRippleModule } from '@angular/material/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';

const modules: any[] = [
  MatSlideToggleModule,
  MatRippleModule,
  MatSliderModule,
  MatCardModule
]


@NgModule({
  declarations: [],
  imports: [...modules],
  exports:[...modules]
})
export class AngularMaterialModule { }
