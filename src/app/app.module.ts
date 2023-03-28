import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageSliderComponent } from './shared/image-slider/image-slider.component';
import { HighlightDirective } from './shared/highlight/highlight.directive';
import { SelectButtonComponent } from './shared/select-button/select-button.component';
import { ArrowsComponent } from './shared/arrows/arrows.component';
import { DotsComponent } from './shared/dots/dots.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageSliderComponent,
    HighlightDirective,
    SelectButtonComponent,
    ArrowsComponent,
    DotsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
