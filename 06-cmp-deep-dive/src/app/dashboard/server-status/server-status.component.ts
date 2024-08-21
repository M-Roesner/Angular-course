import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent implements OnInit {
  // 'implements OnInit', is recommended to prevent bugs for incorrect write-whitening
  // if you want to use ngOnInit instead of the constructor.
  currentStatus: 'online' | 'offline' | 'unknown' = 'online';

  constructor() {
    // setInterval(() => {
    //   const rnd = Math.random();
    //   if (rnd < 0.5) this.currentStatus = 'online';
    //   else if (rnd < 0.9) this.currentStatus = 'offline';
    //   else this.currentStatus = 'unknown';
    // }, 5000);
  }

  ngOnInit() {
    setInterval(() => {
      const rnd = Math.random();

      if (rnd < 0.5) this.currentStatus = 'online';
      else if (rnd < 0.9) this.currentStatus = 'offline';
      else this.currentStatus = 'unknown';
    }, 5000);
  }
}
