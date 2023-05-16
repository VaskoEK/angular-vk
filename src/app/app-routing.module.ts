import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlaygroundComponent } from './feature/playground/playground.component';

const routes: Routes = [

  {path:'playground', component: PlaygroundComponent},
  {path:'', redirectTo:'/playground', pathMatch: 'full'},
  {path:'**', redirectTo:'/playground'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
