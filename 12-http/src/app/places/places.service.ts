import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap, throwError } from 'rxjs';

import { Place } from './place.model';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  private httpClient = inject(HttpClient);

  private userPlaces = signal<Place[]>([]);

  loadedUserPlaces = this.userPlaces.asReadonly();

  loadAvailablePlaces() {
    return this.fetchPlaces(
      'http://localhost:3000/places',
      'Something went wrong fetching places the available places. Please try again later.'
    );
  }

  loadUserPlaces() {
    return this.fetchPlaces(
      'http://localhost:3000/user-places',
      'Something went wrong fetching places your favorite places. Please try again later.'
    ).pipe(
      tap({
        // `tap` is used to update local state.
        // In this case, it updates `userPlaces` when the fetch is successful.
        // Alternative: You can update `userPlaces` inside the `subscribe()` method after calling loadUserPlaces():
        // .subscribe({
        //   next: (places) => {
        //     this.userPlaces.set(places);
        //   },
        //   complete: ... ,
        //   error: ...
        // })
        next: (userPlaces) => this.userPlaces.set(userPlaces),
      })
    );
  }

  addPlaceToUserPlaces(place: Place) {
    const prevPlaces = this.userPlaces();

    // ensure there are no duplicate in userPlaces
    if (!prevPlaces.some((p) => p.id === place.id)) {
      // Immediately updates the local userPlaces state with the new place.
      // This ensures the UI reflects the change instantly.
      this.userPlaces.set([...prevPlaces, place]);
    }

    // If you use the update method like this:
    // this.userPlaces.update(prevPlaces => [...prevPlaces, place]);
    // This might cause a bug if the data isn't successfully stored on the backend.
    // To prevent this, you can use the pipe (shown below) and employ catchError()
    // to revert the local state in case of an error.

    return this.httpClient
      .put('http://localhost:3000/user-places', {
        placeId: place.id,
      })
      .pipe(
        catchError((error) => {
          // Reverts the userPlaces state back to its previous state if the HTTP request fails.
          this.userPlaces.set([...prevPlaces]);
          return throwError(() => new Error('Failed to store selected place.'));
        })
      );
  }

  removeUserPlace(place: Place) {}

  private fetchPlaces(url: string, errorMessage: string) {
    return this.httpClient.get<{ places: Place[] }>(url).pipe(
      map((resData) => resData.places),
      catchError((error, obs) => {
        console.log(error.message);
        return throwError(() => new Error(errorMessage));
      })
    );
  }
}
