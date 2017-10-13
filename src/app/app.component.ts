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



function createSwitches(): Array<boolean> {
  var switches: Array<boolean> = [];
  for(let i = 1; i<=1000; i++){
    let x = Math.floor(Math.random()*2)+1
    if (x===1) {
      switches.push(true);
    } else {
      switches.push(false);
    }
  }
  return switches;
}

