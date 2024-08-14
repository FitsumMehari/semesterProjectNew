import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {


  togglePassword(elementId:string) {
   var element =  document.getElementById(elementId);
   if (element?.getAttribute('type') == 'password') {
    element.setAttribute('type', 'text');
  } else if (element?.getAttribute('type') == 'text') {
    element.setAttribute('type', 'password');
  }
}
}
