import { NgModule } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatRippleModule } from '@angular/material/core';

const modules: any[] = [
  MatSlideToggleModule,
  MatRippleModule
]


@NgModule({
  declarations: [],
  imports: [...modules],
  exports:[...modules]
})
export class AngularMaterialModule { }
