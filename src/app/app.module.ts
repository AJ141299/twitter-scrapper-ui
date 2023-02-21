import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CarouselComponent } from './carousel/carousel.component';
import {ObserversModule} from '@angular/cdk/observers';

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ObserversModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
