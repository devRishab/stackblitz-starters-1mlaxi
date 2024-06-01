import { Component } from '@angular/core';
import { FirstService } from '../first.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-third',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './third.component.html',
  styleUrl: './third.component.css',
})
export class ThirdComponent {
  todos: string[] = [];

  constructor(private eventBus: FirstService) {}

  ngOnInit() {
    this.eventBus.on('ADD_TODO', (todo: string) => {
      this.todos.push(todo);
    });
  }
}
