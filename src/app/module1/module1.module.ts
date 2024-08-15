import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module1RoutingModule } from './module1-routing.module';
import { New1Component } from './new1/new1.component';
import { AppRoutingModule } from '../app-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { CustomDirective } from '../custom.directive';
import { CustomPipe } from './custom.pipe';


@NgModule({
  declarations: [
    New1Component,
    NotFoundComponent,
    CustomDirective,
    CustomPipe
  ],
  imports: [
    CommonModule,
    Module1RoutingModule
  ]
})
export class Module1Module { }
