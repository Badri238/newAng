import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { CommonServiceService } from '../common-service.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

  private subscription!: Subscription;
  constructor(private cService: CommonServiceService) {

  }
  child1 = "This is word from child1"

  subjectAns?:string
  @Input()
  title!: String

  @Output()
  valtoParent = new EventEmitter<String>();

  sendTo(): void{
    this.valtoParent.emit("Tetsing parent")
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log("when i will call onchange")
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log("when i will call init")

    this.subscription = this.cService.commonSubject$.subscribe((e) => {
      console.log("i will run when subject changes")
      console.log(e)
      this.subjectAns = e
    })
  }

  callCommon(): void{
    this.cService.getValues("child")
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    console.log("when i will call destroy")
  }
}
