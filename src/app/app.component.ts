import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list'; 



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    NgFor,
    NgIf,
    FormsModule,
    MatIconModule,
    MatDividerModule,
    MatListModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'todo-app';
  task: any;
  tasks: string[] = [];
  editingIndex: number | null = null;
  editTaskValue: string = '';

  addTask() {
    this.tasks.push(this.task);
    this.task = '';
  }

  removeTask(i: number) {
    this.tasks.splice(i, 1);
  }

  editTask(i: number) {
    this.editingIndex = i;
    this.editTaskValue = this.tasks[i];
  }

  saveTask() {
    if (this.editingIndex !== null && this.editTaskValue.trim() !== '') {
      this.tasks[this.editingIndex] = this.editTaskValue;
    }
    this.cancelEdit();
  }

  cancelEdit() {
    this.editingIndex = null;
    this.editTaskValue = '';
  }
}
