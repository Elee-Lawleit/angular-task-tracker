import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  title = 'Angular Task Tracker';
  showAddTask: boolean = false;
  subscription!: Subscription;

  constructor(private uiService: UiService) {
    //updating the state, but now the state is available outside of the component as well, CAN think of it as Context maybe, but this has things like observers and stuff
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddTask = value));
  }

  toggleAddTask() {
    this.uiService.toggleAddTask();
  }
}
