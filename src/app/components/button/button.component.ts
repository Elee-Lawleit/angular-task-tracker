import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  @Input() text: string = '';
  @Input() color: string = '';

  //we are emitting an event here, so we can reuse the button everywhere else
  //the whereever we use the button, we simply define that custom event and pass
  // it whatever function we want, basically

  // if in header: <app-button (btnClick)="AddTask()"></app-button>
  // somewhere else: <app-button (btnClick)="SomeOtherFunction()"></app-button>

  // we can see that the same button component is used, so yea

  @Output() btnClick = new EventEmitter();

  onClick() {
    this.btnClick.emit();
  }
}
