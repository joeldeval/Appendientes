import { Component } from '@angular/core';
import {TaskService} from './services/task.service';

@Component({
  moduleId: module.id,
  selector: 'appendientes',
  templateUrl: 'app.component.html',
  providers:[TaskService]
})

export class AppComponent { }
