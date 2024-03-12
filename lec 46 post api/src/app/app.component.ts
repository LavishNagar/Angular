import { Component, importProvidersFrom } from '@angular/core';
import { UsersDataService } from './services/users-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'service in angular';
  users: any;
  constructor(private userData: UsersDataService) {
    userData.users().subscribe((data) => {
      console.warn('data', data);
      this.users = data;
    });
  }

  getUserFormData(data:any){
    console.warn(data);
    this.userData.saveUsers(data).subscribe((result)=>{
      console.warn(result);
    })

  }
}
