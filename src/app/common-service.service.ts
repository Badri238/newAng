import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, GuardResult, MaybeAsync, RouterStateSnapshot } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { HooksComponent } from './hooks/hooks.component';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService implements CanActivate,CanDeactivate<HooksComponent> {

  constructor(private http: HttpClient) { }
  canDeactivate(component: HooksComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot): boolean {
    return component.canExit()
  }
  isLoggedIn = false;

  commonSubject = new BehaviorSubject<string>("");
  commonSubject$ = this.commonSubject.asObservable()
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
    if (this.isLoggedIn) {
      return true
    }
    return false
  }

  update(n : any): void{
    this.commonSubject.next(n)
  }
  login(): void{
    this.isLoggedIn = true

  }

  logout(): void{
    this.isLoggedIn = false

  }
  getValues(e: string): void {
    console.log("hi from common service",e)
  }

  getApi(apiUrl : string) : Observable<any>{
    return this.http.get(apiUrl)
  }
}
