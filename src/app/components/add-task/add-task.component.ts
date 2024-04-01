import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../../Task';
import { CommonModule } from '@angular/common';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css',
})
export class AddTaskComponent {
  //going to need to add a variable/field for each form field
  text: string = '';
  day: string = '';
  reminder: boolean = false;
  showAddTask: boolean = false;
  subscription!: Subscription;

  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();

  constructor(private uiService: UiService) {

    //changing the state variable here as well, to the global state value

    //passing state can be a little confusing but I think I'll get the hang of it
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddTask = value));
  }

  onSubmit() {
    if (!this.text) {
      alert('Please add a task');
      return;
    }

    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder,
    };

    this.onAddTask.emit(newTask);

    this.text = '';
    (this.day = ''), (this.reminder = false);
  }
}
