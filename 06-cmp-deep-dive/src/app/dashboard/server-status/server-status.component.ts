import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent implements OnInit, AfterViewInit, OnDestroy {
  // 'implements OnInit', is recommended to prevent bugs for incorrect write-whitening
  // if you want to use ngOnInit instead of the constructor.
  currentStatus: 'online' | 'offline' | 'unknown' = 'online';

  // ReturnType<typeof setInterval> - gets the correct return type of setInterval
  private interval?: ReturnType<typeof setInterval>;

  constructor() {}

  ngOnInit() {
    console.log('ON INIT');

    this.interval = setInterval(() => {
      const rnd = Math.random();

      if (rnd < 0.5) this.currentStatus = 'online';
      else if (rnd < 0.9) this.currentStatus = 'offline';
      else this.currentStatus = 'unknown';
    }, 5000);
  }

  ngAfterViewInit() {
    console.log('AFTER VIEW INIT');
  }

  ngOnDestroy(): void {
    // cleans the interval for preventing memory leaks
    clearTimeout(this.interval);
  }
}
