import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent  {
  formData = {
   
    username: '',
    password:""
    
  };

  constructor(private http: HttpClient, private router: Router) { }


  postData(data: any) {
    return this.http.post<any>('http://localhost:8081/admin/login', this.formData);
  }

  
  onSubmit() {
    const data = { key: this.formData }; // Replace with your actual data
    this.postData(data).subscribe(
      (response:any) => {
        if (response.role === 'admin') {
          this.router.navigate(['/admin-dashboard']);
        } 
        else {
          // Handle non-admin roles or invalid authentication
          console.log(this.formData)
        }
      },
    );
  }
}

//   login(username: string, password: string): void {
//     // Make HTTP request to your API endpoint
//     this.http.post<any>('http://localhost:8081/admin/login', { username, password }).subscribe(
//       (response: any) => {
//         if (response.role === 'admin') {
//           this.router.navigate(['/admin-dashboard']);
//         } else {
//           // Handle non-admin roles or invalid authentication
//           console.log(password)
//         }
//       },
//       (error: any) => {
//         console.error('Error:', error);
//         // Handle error
//       }
//     );
//   }
// }
