import { NgModule } from '@angular/core';
import { MyFirstTableComponent } from './my-first-table.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    MyFirstTableComponent
  ],
  imports: [
    BrowserModule,
    NzTableModule,
    FormsModule,
    CommonModule,
  ],
  exports: [
    MyFirstTableComponent
  ]
})
export class MyFirstTableModule { }
