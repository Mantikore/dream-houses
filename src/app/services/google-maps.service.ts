import { Injectable, NgZone } from '@angular/core';
import {House} from '../models/house';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GoogleMapsService {

  gmapService = new google.maps.DistanceMatrixService();
  destinations: google.maps.LatLng[];

  constructor(
    private zone: NgZone
  ) {}

  getDistances(origins: string[], arrayOfData: House[]): Observable<House[]> {
    this.destinations = this.getDestinations(arrayOfData);
    return new Observable((observer) => {
      this.gmapService.getDistanceMatrix(
        {
          origins,
          destinations: this.destinations,
          travelMode: google.maps.TravelMode.WALKING
        }, (googleData: any, status) => {
          if (status === google.maps.DistanceMatrixStatus.OK) {
            const newArray = [...arrayOfData];
            googleData.rows[0].elements.forEach((item: any, i: number) => newArray[i].distance = item.distance.value);
            newArray.sort((a: House, b: House) => a.distance - b.distance);
            this.zone.run(() => observer.next(newArray));
          } else {
            alert(`Something wrong with Google Maps Service! Status code is ${status}`);
          }
        }
      );
    });
  }

  private getDestinations(array: House[]) {
    const destinations: google.maps.LatLng[] = [];
    array.forEach((house: House) => {
      const destination = new google.maps.LatLng(house.coords.lat, house.coords.lon);
      destinations.push(destination);
    });
    return destinations;
  }
}
