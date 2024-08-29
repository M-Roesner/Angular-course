# Observable (created by chatGTP)

## What are observables and how can I use them?

Observables are a core concept in RxJS (Reactive Extensions for JavaScript) and Angular. They represent a stream of asynchronous events or data that can be processed over time. Unlike Promises, which handle a single asynchronous event, Observables can handle multiple events and provide more advanced capabilities like transformation, filtering, and combination of streams.

To use an observable, you need to subscribe to it. The subscription connects the observable to its observer, which listens to the data or events emitted by the observable.

### Example of subscribing to an observable:

```ts
import { of } from "rxjs";

const observable = of(1, 2, 3);

observable.subscribe({
  next: (value) => console.log("Received:", value),
  error: (err) => console.error("Error:", err),
  complete: () => console.log("Completed"),
});
```

In this example, `of` is a creation function that emits a sequence of numbers (1, 2, 3). The `subscribe` method connects to the observable and logs each value, handles any errors, and signals completion.

### Manipulating an observable before subscribing:

You can manipulate or transform the data stream from an observable before you subscribe to it. RxJS provides a variety of operators for this purpose, such as `map`, `filter`, and `switchMap`.

```ts
import { of } from "rxjs";
import { map } from "rxjs/operators";

const numbers$ = of(1, 2, 3).pipe(map((value) => value * 2));

numbers$.subscribe({
  next: (value) => console.log("Received:", value), // Output: 2, 4, 6
  error: (err) => console.error("Error:", err),
  complete: () => console.log("Completed"),
});
```

In this example, the `$` convention is used to indicate that `numbers$` is an Observable. The Observable is created using `of(1, 2, 3)`, which emits the values `1`, `2`, and `3`.

The `map` operator is used to double each value emitted by the observable before it is handled by the subscriber.

### Unsubscribing from observables:

It is important to unsubscribe from observables when they are no longer needed, especially in Angular components, to avoid memory leaks. You can store the subscription in a variable and call `unsubscribe()` to stop listening to the observable.

**Example of unsubscribing from an observable using Angular's DestroyRef:**

```ts
import { Component, OnInit, OnDestroy, DestroyRef, inject } from "@angular/core";
import { Subscription, interval } from "rxjs";

@Component({
  selector: "app-example",
  template: `{{ time }}`,
})
export class ObservableClassExample implements OnInit, OnDestroy {
  private subscription: Subscription;
  private destroyRef = inject(DestroyRef);
  time: number;

  ngOnInit() {
    const source = interval(1000); // Emits increasing numbers every second
    this.subscription = source.subscribe((value) => {
      this.time = value;
      console.log("Time:", value);
    });

    // Unsubscribe automatically when the component is destroyed
    this.destroyRef.onDestroy(() => this.subscription?.unsubscribe());
  }

  ngOnDestroy() {
    // Manually unsubscribe if needed - optional
    this.subscription?.unsubscribe();
  }
}
```

In this example, we use the `interval` function to emit a value every second. The subscription is stored in the `subscription` variable, and the `unsubscribe` method is called automatically when the component is destroyed using `DestroyRef`.

## Usage example:

Here is a more advanced usage example of an observable in a real-world scenario:

```ts
import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Component({
  selector: "app-data-fetcher",
  template: `<div *ngIf="data">{{ data | json }}</div>`,
})
export class DataFetcherComponent implements OnInit {
  data: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchData().subscribe({
      next: (response) => {
        this.data = response;
        console.log("Data received:", response);
      },
      error: (err) => console.error("Error fetching data:", err),
      complete: () => console.log("Data fetch complete"),
    });
  }

  fetchData(): Observable<any> {
    return this.http.get("https://api.example.com/data");
  }
}
```

In this example, we use Angular's `HttpClient` to fetch data from an API. The `fetchData` method returns an observable, which we subscribe to in the `ngOnInit` lifecycle method to handle the data, errors, and completion.
