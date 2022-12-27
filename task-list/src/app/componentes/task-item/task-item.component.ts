import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';
import { task } from 'src/app/task';
import { TASKS } from 'src/app/mock-task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task: task= TASKS[0];
  @Output() onDeleteTask: EventEmitter<task> = new EventEmitter()
  @Output() onToggleReminder: EventEmitter<task> = new EventEmitter()
  faTimes = faTimes;
  constructor() { }

  ngOnInit(): void {
  }
  
  onDelete(tasks: task){
    this.onDeleteTask.emit(tasks);
  }
  onToggle(task:task){
    this.onToggleReminder.emit(task);
  }
}
