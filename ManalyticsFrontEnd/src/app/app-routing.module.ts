/**
 * Kenneth Carroll
 * 
 * 3/2/2021
 * Revision 1
 */

// Angular imports
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardHomeComponent } from './admin/components/card-home/card-home.component';


//routes constant
const routes: Routes = [
  {path: 'admin', component: CardHomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
