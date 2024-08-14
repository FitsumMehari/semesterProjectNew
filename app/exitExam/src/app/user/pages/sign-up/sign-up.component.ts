import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  togglePassword(elementId:string) {
    var element =  document.getElementById(elementId);
    if (element?.getAttribute('type') == 'password') {
     element.setAttribute('type', 'text');
   } else if (element?.getAttribute('type') == 'text') {
     element.setAttribute('type', 'password');
   }
 }
}
