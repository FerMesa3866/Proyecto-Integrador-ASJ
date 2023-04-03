import { Component } from '@angular/core';

import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import Swal from "sweetalert2";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  name: string = '';
  email: string = '';
  message: string = '';

  onSubmit() {
    console.log(`Name: ${this.name}`);
    console.log(`Email: ${this.email}`);
    console.log(`Message: ${this.message}`);
  }

  public sendEmail(e: Event) {
    e.preventDefault();
    emailjs.sendForm('service_99a8et7', 'template_kq9r9be', e.target as HTMLFormElement, 'TGBqSw9bevTDctfJp')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    Swal.fire('Tu mensaje se envió exitosamente');
  }

}
