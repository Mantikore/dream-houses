import { Injectable, NgZone } from '@angular/core';
import {House} from '../models/house';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GoogleMapsService {
  constructor(
    private zone: NgZone
  ) {}

  getDistances(origins: string[], arrayOfData: House[]): Observable<House[]> {
    const destinations: any[] = [];
    arrayOfData.forEach((house: House) => {
      const destination = new google.maps.LatLng(house.coords.lat, house.coords.lon);
      destinations.push(destination);
    });
    return new Observable((observer) => {
      new google.maps.DistanceMatrixService().getDistanceMatrix(
        {
          origins,
          destinations,
          travelMode: google.maps.TravelMode.WALKING
        }, (googleData: any) => {
          const newArray = [...arrayOfData];
          googleData.rows[0].elements.forEach((item: any, i: number) => newArray[i].distance = item.distance.value);
          newArray.sort((a: House, b: House) => a.distance - b.distance);
          this.zone.run(() => observer.next(newArray));
        }
      );
    });
  }
}
