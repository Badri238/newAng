import { Module1Module } from './module1/module1.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HooksComponent } from './hooks/hooks.component';
import { ChildComponent } from './child/child.component';
import { CommonServiceService } from './common-service.service';

const routes: Routes = [{
  path: "home",
  component: HooksComponent,
}, {
  path: "ch",
  component:ChildComponent
  }, {
  path: "newmod",
  loadChildren:() => import("../app/module1/module1.module").then((e) => e.Module1Module)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
