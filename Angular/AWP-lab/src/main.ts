import { bootstrapApplication } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { importProvidersFrom } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'hello-name',
  standalone: true,
  template: `
    <input [(ngModel)]="name" placeholder="Enter your name" />
    Hello {{ name }}
  `,
  imports: [FormsModule]
})
export class HelloNameComponent {
  name = '';
}

bootstrapApplication(HelloNameComponent, {
  providers: [importProvidersFrom(FormsModule)]
});
