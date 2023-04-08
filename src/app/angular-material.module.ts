import { NgModule } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';


const modules: any[] = [
  MatSlideToggleModule,
  MatInputModule,
  MatIconModule
]

@NgModule({
  declarations: [],
  imports: [...modules],  // ...: tömbbe fűzze bele a modules tömböt is
  exports:[...modules]
})
export class AngularMaterialModule { }
