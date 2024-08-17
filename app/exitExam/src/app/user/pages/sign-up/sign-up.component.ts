import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { User } from '../../User.interface';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  constructor(private auth: AuthService) {}

  user: User = {};

   // Register
   register() {
    if(this.user.password != this.user.confirmPassword) {
      alert("Passwords do not match!");
      this.user = {}
    } else {    this.auth.register(this.user);
    }
  }

    // For the toggle password eye button
  togglePassword(elementId:string) {
    var element =  document.getElementById(elementId);
    if (element?.getAttribute('type') == 'password') {
     element.setAttribute('type', 'text');
   } else if (element?.getAttribute('type') == 'text') {
     element.setAttribute('type', 'password');
   }
 }
}
