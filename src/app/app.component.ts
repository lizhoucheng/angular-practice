import { Component } from '@angular/core';
import PersonData from '../assets/data/person-1.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Solution';
  person: any;
  interval = null;
  currentDate: Date;
  timeDiff = 0;
  timerRunning = false;

  ngOnInit() {
    this.person = PersonData;
  }

  handleCallHistoryEvent() {
    console.log("go to call history");
  }

  handleIncallEvent($event) {
    console.log("incall button clicked");
    if(!this.timerRunning) {
      this.currentDate = new Date();
      this.interval = setInterval(() => {
      let newDate = new Date();
      this.timeDiff = (newDate.getTime() - this.currentDate.getTime()) / 1000;
      }, 1000);
    } else {
      clearInterval(this.interval);
      this.person.callDuration = $event;
      this.timeDiff = 0;
    }
    this.timerRunning = !this.timerRunning;
  }
}
