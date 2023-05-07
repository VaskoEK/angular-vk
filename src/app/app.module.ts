import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlaygroundComponent } from './feature/playground/playground.component';
import { FieldComponent } from './feature/field/field.component';

@NgModule({
  declarations: [
    AppComponent,
    PlaygroundComponent,
    FieldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
