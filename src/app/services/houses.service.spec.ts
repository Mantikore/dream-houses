import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { HousesService } from './houses.service';
import { GoogleMapsService } from './google-maps.service';
import { asyncData } from '../../testing/async-data-helper';
import { of } from 'rxjs';
import {
  expectedBestHouse,
  expectedFilteredMissingDataHouses,
  expectedFilteredRoomsHouses,
  expectedHouses, expectedHousesDistances
} from '../../testing/testing-data';

describe('HousesService', () => {
  let httpClientSpy: { get: jasmine.Spy };
  let googleMapsSpy: { getDistances: jasmine.Spy };
  let housesService: HousesService;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    googleMapsSpy = jasmine.createSpyObj('GoogleMapsService', ['getDistances']);
    housesService = new HousesService(httpClientSpy as any, googleMapsSpy as any);

    httpClientSpy.get.and.returnValue(asyncData(expectedHouses));
  });

  it('should return all Houses (HttpClient called once)', () => {
    housesService.getAllHouses().subscribe(
      houses => expect(houses).toEqual(expectedHouses.houses, 'expected houses'),
      fail
    );
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });
  it('should filter houses with missing data', () => {
    housesService.filterMissingData().subscribe(
      houses => expect(houses).toEqual(expectedFilteredMissingDataHouses, 'expected houses'),
      fail
    );
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });
  it('should filter houses by number of rooms', () => {
    housesService.filterByRooms().subscribe(
      houses => expect(houses).toEqual(expectedFilteredRoomsHouses, 'expected houses'),
      fail
    );
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });
  it('should return best house for living', () => {
    googleMapsSpy.getDistances.and.returnValue(asyncData(expectedHousesDistances));
    housesService.bestHouse(of(expectedHousesDistances.houses)).subscribe(
      houses => expect(houses).toEqual(expectedBestHouse, 'expected house'),
      fail
    );
  });
});
