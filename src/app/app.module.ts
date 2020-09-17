import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AaaComponent } from './aaa/aaa.component';
import { FormsModule } from '@angular/forms';
import { BbComponent } from './aaa/bb/bb.component';

@NgModule({
  declarations: [
    AppComponent,
    AaaComponent,
    BbComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
