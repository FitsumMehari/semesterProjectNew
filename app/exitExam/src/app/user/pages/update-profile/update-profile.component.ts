import { Component } from '@angular/core';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrl: './update-profile.component.css'
})
export class UpdateProfileComponent {
  togglePassword(elementId:string) {
    var element =  document.getElementById(elementId);
    if (element?.getAttribute('type') == 'password') {
     element.setAttribute('type', 'text');
   } else if (element?.getAttribute('type') == 'text') {
     element.setAttribute('type', 'password');
   }
 }
}
