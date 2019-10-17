import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { LoaderComponent } from './components/shared/loader/loader.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { HousesFilterListComponent } from './components/houses-filter-list/houses-filter-list.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HousesFilterListComponent
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

});
