import { Component } from '@angular/core';

@Component({
  selector: 'app-create-new-password',
  templateUrl: './create-new-password.component.html',
  styleUrl: './create-new-password.component.css'
})
export class CreateNewPasswordComponent {
  togglePassword(elementId:string) {
    var element =  document.getElementById(elementId);
    if (element?.getAttribute('type') == 'password') {
     element.setAttribute('type', 'text');
   } else if (element?.getAttribute('type') == 'text') {
     element.setAttribute('type', 'password');
   }
 }
}
