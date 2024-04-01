import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {

  private showAddTask: boolean = false
  private subject = new Subject<any>();

  constructor() { }


  //we're gonna call this whenever we want to show or hide the add task component
  toggleAddTask(): void {
    this.showAddTask = !this.showAddTask
    this.subject.next(this.showAddTask)
  }

  //and then this is being used for subscribing to the toggle, basically if we want to do something whent the toggle happens, we can subscribe to that toggle happening through this function
  onToggle(): Observable<any>{
    return this.subject.asObservable();
  }

}
