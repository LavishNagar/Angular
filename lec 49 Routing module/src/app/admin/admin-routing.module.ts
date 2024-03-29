import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { combineLatest } from 'rxjs';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [{path:"login",component:LoginComponent},
{path:"list",component:ListComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
