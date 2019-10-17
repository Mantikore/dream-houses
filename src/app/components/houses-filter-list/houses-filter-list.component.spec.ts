import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HousesFilterListComponent } from './houses-filter-list.component';
import { LoaderComponent } from '../shared/loader/loader.component';
import { HousesService } from '../../services/houses.service';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('HousesFilterListComponent', () => {
  let component: HousesFilterListComponent;
  let fixture: ComponentFixture<HousesFilterListComponent>;


  beforeEach(async(() => {
    const housesService = jasmine.createSpyObj('HousesService', ['filterByRooms', 'filterMissingData', 'filterDistance', 'bestHouse']);

    TestBed.configureTestingModule({
      declarations: [ HousesFilterListComponent, LoaderComponent ],
      providers: [{ provide: HousesService, useValue: housesService }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HousesFilterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
