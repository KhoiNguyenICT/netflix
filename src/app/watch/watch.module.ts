import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WatchComponent } from './watch.component';

const routes: Routes = [
  {
    path: '',
    component: WatchComponent
  }
]

@NgModule({
  declarations: [WatchComponent],
  imports: [
    CommonModule
  ]
})
export class WatchModule { }
