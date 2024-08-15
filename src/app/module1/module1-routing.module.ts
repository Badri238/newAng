import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { New1Component } from './new1/new1.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [{
  path: "home",
  component:New1Component
},  {
  path: "homie",
  redirectTo:"home"
},{
  path: "**",
  component:NotFoundComponent
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module1RoutingModule { }
