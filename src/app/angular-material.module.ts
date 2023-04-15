import { NgModule } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatMenuModule} from '@angular/material/menu';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';


const modules: any[] = [
  MatSlideToggleModule,
  MatInputModule,
  MatIconModule,
  MatCardModule,
  MatButtonModule,
  MatCheckboxModule,
  MatMenuModule,
  MatTableModule,
  MatPaginatorModule
]

@NgModule({
  declarations: [],
  imports: [...modules],  // ...: tömbbe fűzze bele a modules tömböt is
  exports:[...modules]
})
export class AngularMaterialModule { }
