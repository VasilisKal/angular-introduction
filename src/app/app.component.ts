import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonComponent } from './person/person.component';
import { Person } from './interfaces/person';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, PersonComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = "Vasilis";
  lastname = "Kalomenidis"

    person: Person = {
    givenName: 'Vasilis',
    surName: 'Kalomenidis',
    age: 30,
    email: 'vasiliskalomenidis@gmail.com',
    address: 'Athens, Greece'
}
  
}

