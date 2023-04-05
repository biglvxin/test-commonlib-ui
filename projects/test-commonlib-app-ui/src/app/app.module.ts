import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { MyFirstTableModule } from '@lx-custom-ui/test-commonlib-ui/my-first-table';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MyFirstTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
