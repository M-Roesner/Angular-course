import {
  Component,
  computed,
  DestroyRef,
  effect,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { interval, map, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  // Hint: observable have a $ on the end (this ist only a convention!)

  clickCount = signal(0); // signal
  constructor() {
    // Listenings for changes of a signal property:
    // effect(() => {
    //   console.log(`Clicked Button ${this.clickCount()} times.`);
    // });
  }
  clickCount$ = toObservable(this.clickCount); // Converts a signal to an observable

  interval$ = interval(1000); // oberverable
  intervalSignal = toSignal(this.interval$); // it will be shown on the componente template

  // signal from Angular since v17 - doubles the value with Signal
  // interval = signal(0);
  // doubleInterval = computed(() => this.interval() * 2);

  private destroyRef = inject(DestroyRef); // To destroy the oberservable with RxJS
  ngOnInit(): void {
    // Oberservable with RxJS - double the value with an Observable every second
    // const subscription = interval(1000)
    //   .pipe(map((val) => val * 2))
    //   .subscribe({
    //     next: (val) => {
    //       console.log(val);
    //     },
    //   });
    // this.destroyRef.onDestroy(() => subscription.unsubscribe());

    // Listenings for changes of the signal property with help of an observable (RxJS):
    // Displays (log) the signal with an observable
    const subscriptionCount = this.clickCount$.subscribe({
      next: (val) => {
        console.log(`Clicked Button ${this.clickCount()} times.`);
      },
    });
    this.destroyRef.onDestroy(() => subscriptionCount.unsubscribe());

    // use the custom observable
    this.customInterval$.subscribe({
      next: (val) => {
        console.log(val);
      },
      complete: () => {
        console.log('COMPLETED!');
      },
      error: (error) => {
        console.error('Error:', error);
      },
    });
  }

  onclick() {
    this.clickCount.update((prevCount) => prevCount + 1);
  }

  // create a custom observable
  customInterval$ = new Observable((subscriber) => {
    let timesExecuted = 0;
    const interval = setInterval(() => {
      // subscriber.error();
      if (timesExecuted > 3) {
        clearInterval(interval);
        subscriber.complete();
        return;
      }
      console.log('Emitting new value');
      subscriber.next({
        message: 'New value',
      });
      timesExecuted++;
    }, 2000);
  });
}
