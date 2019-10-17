import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
// @ts-ignore
import {} from '@types/googlemaps';

import {House} from '../models/house';
import { map, mergeMap, switchMap } from 'rxjs/operators';
import {GoogleMapsService} from './google-maps.service';

@Injectable({
  providedIn: 'root'
})
export class HousesService {
  private housesUrl = `/assets/data.json`;
  origin = ['Eberswalder Str. 55'];

  constructor(
    private http: HttpClient,
    private googleMapsService: GoogleMapsService
  ) {
  }

  getAllHouses(): Observable<House[]> {
    return this.http.get<any>(this.housesUrl).pipe(map(data => data.houses));
  }

  filterByRooms(): Observable<House[]> {
    return this.getAllHouses().pipe(map(data => {
      return data.filter((house: House) => house.params && house.params.rooms && house.params.rooms > 5)
        .sort((a: House, b: House) => a.params.rooms - b.params.rooms);
    }));
  }

  filterMissingData(): Observable<House[]> {
    return this.getAllHouses().pipe(map(data => {
      return data.filter((house: House) => !house.params || !house.params.rooms || !house.params.value)
        .sort((a: House, b: House) => {
          if (a.street < b.street) {
            return -1;
          }
          if (b.street > a.street) {
            return 1;
          }
          return 0;
        });
    }));
  }

  filterDistance(): Observable<House[]> {
    return this.getAllHouses().pipe(
      switchMap((data) => {
        return this.googleMapsService.getDistances(this.origin, data);
      })
    );
  }

  bestHouse(data: Observable<House[]>): Observable<House> {
    return data.pipe(map(houses => {
      return houses.filter((item) =>
        item.params && item.params.rooms && item.params.rooms >= 10 && item.params.value && item.params.value <= 5000000)[0];
    }));
  }
}
