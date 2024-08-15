import { Component } from '@angular/core';
import { CommonServiceService } from '../common-service.service';

@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
  styleUrl: './hooks.component.css'
})
export class HooksComponent {

  constructor(private cService: CommonServiceService) {

  }

  name?:string
  isSubmit = false;
  canExit() :boolean {
    if (!this.isSubmit) {
      confirm("Do you want to exit without saved changes")
      return this.isSubmit
    }
    return true
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log("entering")
    this.cService.update("iifij");
  }
  call(): void{
    console.log("hii")
    this.cService.update(this.name)
  }
}
