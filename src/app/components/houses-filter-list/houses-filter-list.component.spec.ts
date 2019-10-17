import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HousesFilterListComponent } from './houses-filter-list.component';

describe('RoomsFilterListComponent', () => {
  let component: HousesFilterListComponent;
  let fixture: ComponentFixture<HousesFilterListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HousesFilterListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HousesFilterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
