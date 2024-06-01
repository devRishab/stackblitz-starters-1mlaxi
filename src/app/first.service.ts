import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class FirstService {
  constructor() {}

  private subject = new Subject<any>();

  emit(event: any) {
    this.subject.next(event);
  }

  on(eventType: string, action: any): any {
    return this.subject.asObservable().subscribe((event) => {
      if (event.type === eventType) {
        action(event.payload);
      }
    });
  }
}
