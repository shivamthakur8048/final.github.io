import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  isActive: boolean;
  openModal(value:any) {
    value.active = true
  }

  closeModal(value:any) {
    value.active = false
  }
}
