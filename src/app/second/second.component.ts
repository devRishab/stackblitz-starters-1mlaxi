import { Component } from '@angular/core';
import { FirstService } from '../first.service';

@Component({
  selector: 'app-second',
  standalone: true,
  imports: [],
  templateUrl: './second.component.html',
  styleUrl: './second.component.css',
})
export class SecondComponent {
  constructor(private eventBus: FirstService) {}

  addTodo(todo: string) {
    this.eventBus.emit({ type: 'ADD_TODO', payload: todo });
  }
}
