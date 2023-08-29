import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetAllComponent } from './get-all/get-all.component';

const routes: Routes = [
  {path:'' , redirectTo:'task/get-all', pathMatch:'full'},
  {path:'task/get-all', component:GetAllComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
