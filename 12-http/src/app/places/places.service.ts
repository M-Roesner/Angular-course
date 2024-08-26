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

  addPlaceToUserPlaces(placeId: string) {
    return this.httpClient.put('http://localhost:3000/user-places', {
      placeId,
    });
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
