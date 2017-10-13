import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Switchboard';
  switches = createSwitches()
  // switches = [true,false,true,false,false,true,true,true]
}

var switches: Array<boolean> = [];

function createSwitches(): Array<boolean> {
  for(let i = 1; i<=1000; i++){
    switches.push(false);
  }
  return switches;
}

