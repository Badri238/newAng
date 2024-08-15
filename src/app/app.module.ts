import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChildComponent } from './child/child.component';
import { HooksComponent } from './hooks/hooks.component';
import { HttpClientModule } from '@angular/common/http';
import { CustomDirective } from './custom.directive';
import { CommonServiceService } from './common-service.service';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    HooksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
