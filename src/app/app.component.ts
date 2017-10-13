import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Switchboard';
  switches = createSwitches()
}

var switches: Array<boolean> = [];

function createSwitches(): Array<boolean> {
  for(let i = 0; i<=10; i++){
    switches.push(false);
  }
  return switches;
}

