import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError, throwError } from 'rxjs';

import { PlacesContainerComponent } from '../places-container/places-container.component';
import { PlacesComponent } from '../places.component';
import { Place } from '../place.model';

@Component({
  selector: 'app-user-places',
  standalone: true,
  templateUrl: './user-places.component.html',
  styleUrl: './user-places.component.css',
  imports: [PlacesContainerComponent, PlacesComponent],
})
export class UserPlacesComponent implements OnInit {
  places = signal<Place[] | undefined>(undefined);
  isFetching = signal(false);
  error = signal('');

  private httpClient = inject(HttpClient);
  // constructor(httpClient: HttpClient){} // Alternative to the inject function

  private destroyRef = inject(DestroyRef);

  ngOnInit() {
    this.isFetching.set(true);
    const subscription = this.httpClient
      .get<{ places: Place[] }>('http://localhost:3000/user-places')
      .pipe(
        map((resData) => resData.places),
        catchError((error, obs) => {
          console.log(error.message);
          return throwError(
            () =>
              new Error(
                'Something went wrong fetching places your favorit places. Please try again later.'
              )
          );
        })
      ) // Pipe is not necessarily needed.
      .subscribe({
        // Alternatively, you can use the pipe function before.
        // next: (resData) => {
        //   this.places.set(resData.places);
        // },
        next: (places) => {
          this.places.set(places);
        },
        complete: () => {
          this.isFetching.set(false);
        },
        error: (error: Error) => {
          // Alternatively, you can use the pipe function before.
          // console.log(error.message);

          // this.error.set(
          //   'Something went wrong fetching places. Please try again later.'
          // );

          this.error.set(error.message);
        },
      });

    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });
  }
}
