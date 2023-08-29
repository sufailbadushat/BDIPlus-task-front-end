import { NgModule, createComponent } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetAllComponent } from './get-all/get-all.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {path:'' , redirectTo:'task/get-all', pathMatch:'full'},
  {path:'task/get-all', component:GetAllComponent},
  {path:'task/create', component:CreateComponent},
  {path:'task/update/:id', component:UpdateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
