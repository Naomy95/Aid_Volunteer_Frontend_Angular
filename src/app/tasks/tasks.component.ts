import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task',
  standalone:true,
  imports:[CommonModule],
  templateUrl: './tasks.component.html', // Import HTML file
  styleUrls: ['./tasks.component.css'] // Import CSS file
})
export class TaskComponent implements OnInit {
  tasks: any[] = []; // Initialize tasks array

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any[]>('http://localhost:8081/tasks')
      .subscribe(
        (response) => {
          this.tasks = response; // Assign response to tasks array
          console.log(this.tasks)
        },
        (error) => {
          console.error('Error fetching tasks:', error);
        }
      );
  }
}
