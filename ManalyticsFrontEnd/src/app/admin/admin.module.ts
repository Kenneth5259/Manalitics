/**
 * Kenneth Carroll
 * 3/2/2021
 * 
 * Revision 1
 * Module to contain admin dashboard and functionality
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardHomeComponent } from './card-home/card-home.component';



@NgModule({
  declarations: [CardHomeComponent],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
