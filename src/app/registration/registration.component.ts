import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
  formData = {
    id:'',
    volunteerId:'',
    username: '',
    firstName:"",
    lastName:"",
    email: '',
    phone:"",
   
    userStatus:"Volunteer"
  };
  constructor(private http: HttpClient) { }

  postData(data: any) {
    return this.http.post<any>('http://localhost:8081/volunteer', this.formData);
  }

  
  onSubmit() {
    const data = { key: this.formData }; // Replace with your actual data
    this.postData(data).subscribe(
      response => {
        console.log('Post successful:', response);
        // console.log('Registration Form Submitted:', this.formData);
        // Handle the response as needed
      },
      error => {
        console.error('Error posting data:', error);
        // Handle errors
      }
    );
  }

}
