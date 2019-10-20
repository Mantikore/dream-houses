import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { HousesFilterListComponent } from './houses-filter-list.component';
import { LoaderComponent } from '../shared/loader/loader.component';
import { HousesService } from '../../services/houses.service';
import { of } from 'rxjs';
import {
  expectedAnotherHousesDistances,
  expectedBestHouse,
  expectedFilteredMissingDataHouses,
  expectedFilteredRoomsHouses, expectedHousesDistances
} from '../../../testing/testing-data';
import { House } from '../../models/house';

describe('HousesFilterListComponent', () => {
  let component: HousesFilterListComponent;
  let fixture: ComponentFixture<HousesFilterListComponent>;
  let housesService: any;
  let filterByRoomsSpy: any;
  let filterMissingDataSpy: any;
  let filterDistancesSpy: any;
  let bestHouseSpy: any;

  beforeEach(async(() => {
    housesService = jasmine.createSpyObj('HousesService', ['filterByRooms', 'filterMissingData', 'filterDistance', 'bestHouse']);

    TestBed.configureTestingModule({
      declarations: [ HousesFilterListComponent, LoaderComponent ],
      providers: [{ provide: HousesService, useValue: housesService }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HousesFilterListComponent);
    component = fixture.componentInstance;
  });

  it('should show the loader before getting data', () => {
    fixture.detectChanges();
    const thisElement: HTMLElement = fixture.nativeElement;
    expect(thisElement.querySelector('app-loader')).not.toBe(null);
  });

  it('should render filtered rooms data if filter=rooms(filterByRooms called once)', () => {
    component.filter = 'rooms';
    filterByRoomsSpy = housesService.filterByRooms.and.returnValue( of(expectedFilteredRoomsHouses) );
    fixture.detectChanges();
    expect(filterByRoomsSpy.calls.count()).toBe(1, 'filterByRoomsSpy called once');
    component.data.subscribe((houses: House[]) => {
      expect(houses).toEqual(expectedFilteredRoomsHouses);
      expect(fixture.nativeElement.querySelectorAll('li').length).toBe(2);
    });
  });
  it('should render filtered houses with missing data if filter=noData(filterMissingDataSpy called once)', () => {
    component.filter = 'noData';
    filterMissingDataSpy = housesService.filterMissingData.and.returnValue( of(expectedFilteredMissingDataHouses) );
    fixture.detectChanges();
    expect(filterMissingDataSpy.calls.count()).toBe(1, 'filterMissingDataSpy called once');
    component.data.subscribe((houses: House[]) => {
      expect(houses).toEqual(expectedFilteredMissingDataHouses);
      expect(fixture.nativeElement.querySelectorAll('li').length).toBe(1);
    });
  });
  it('should render filtered houses with distances if filter=distance(filterDistance called once)', () => {
    component.filter = 'distance';
    filterDistancesSpy = housesService.filterDistance.and.returnValue( of(expectedHousesDistances.houses) );
    component.ngOnChanges();
    expect(filterDistancesSpy.calls.count()).toBe(1, 'filterDistance called once');
    fixture.detectChanges();
    component.data.subscribe((houses: House[]) => {
      expect(houses).toEqual(expectedHousesDistances.houses);
      expect(fixture.nativeElement.querySelectorAll('li').length).toBe(5);
    });
  });
  it('should render the best house if there are houses with distances', () => {
    component.filter = 'distance';
    bestHouseSpy = housesService.bestHouse.and.returnValue( of(expectedBestHouse) );
    component.ngOnChanges();
    fixture.detectChanges();
    expect(bestHouseSpy.calls.count()).toBe(1, 'filterDistance called once');
    component.houseToMove.subscribe((house: House) => {
      expect(house).toEqual(expectedBestHouse);
    });
  });
  it('should redraw the distances if this component get new origin address', () => {
    component.filter = 'distance';
    filterDistancesSpy = housesService.filterDistance.and.returnValue( of(expectedHousesDistances.houses) );
    component.ngOnChanges();
    fixture.detectChanges();
    expect(filterDistancesSpy.calls.count()).toBe(1, 'filterDistance called for the first time');
    component.data.subscribe((houses: House[]) => {
      expect(houses).toEqual(expectedHousesDistances.houses);
      expect(fixture.nativeElement.querySelectorAll('li').length).toBe(5);
    });
    component.originAdr = 'New Adr';
    filterDistancesSpy = housesService.filterDistance.and.returnValue( of(expectedAnotherHousesDistances.houses) );
    component.ngOnChanges();
    fixture.detectChanges();
    expect(filterDistancesSpy.calls.count()).toBe(2, 'filterDistance called for the second time');
    component.data.subscribe((houses) => {
      expect(houses).toEqual(expectedAnotherHousesDistances.houses);
      expect(fixture.nativeElement.querySelectorAll('li').length).toBe(3);
    });
  });

  afterAll(() => {
    fixture = TestBed.createComponent(HousesFilterListComponent);
  });
});
