import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ChildComponent } from './child/child.component';
import { CommonServiceService } from './common-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  name!: string;
  pass!: string

  constructor(private route:Router,private cService : CommonServiceService) {

  }

  navigate(): void{
    if (this.name === "admin" && this.pass === "123") {
      this.cService.login()
      this.route.navigateByUrl("/home")
    }
  }

}
