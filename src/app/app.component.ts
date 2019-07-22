import { Component } from '@angular/core';
import PersonData from '../assets/data/person-1.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Solution';
  person = {};

  ngOnInit() {
    this.person = PersonData;
  }
}
