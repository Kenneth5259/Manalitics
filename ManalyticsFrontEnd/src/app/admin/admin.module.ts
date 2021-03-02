/**
 * Kenneth Carroll
 * 3/2/2021
 * 
 * Revision 1
 * Module to contain admin dashboard and functionality
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule} from '@angular/material/expansion';
import { MatButtonModule} from '@angular/material/button';
import { CardHomeComponent } from './components/card-home/card-home.component';
import { SetUploadFormComponent } from './components/set-upload-form/set-upload-form.component';



@NgModule({
  declarations: [CardHomeComponent, SetUploadFormComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatExpansionModule,
    BrowserAnimationsModule, 
    HttpClientModule
  ]
})
export class AdminModule { }
