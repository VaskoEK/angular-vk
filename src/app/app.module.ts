import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { todoReducer } from './todo.reducer';
import { EffectsModule } from '@ngrx/effects';
import { TodoEffects } from './todo.effects';
import { HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    StoreModule.forRoot({todos: todoReducer}),
    EffectsModule.forRoot([TodoEffects]),
    HttpClientModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      autoPause: true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
