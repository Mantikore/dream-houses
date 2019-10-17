import { Component, Input, NgZone, OnInit } from '@angular/core';
import { HousesService } from '../../services/houses.service';
import { Observable } from 'rxjs';
import { House } from '../../models/house';
import { map, switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-rooms-filter-list',
  templateUrl: './houses-filter-list.component.html',
  styleUrls: ['./houses-filter-list.component.scss']
})
export class HousesFilterListComponent implements OnInit {

  @Input() filter: string;
  data: Observable<House[]>;
  houseToMove: Observable<House>;

  constructor(
    private housesService: HousesService
  ) {}

  ngOnInit() {
    if (this.filter === 'rooms') {
      this.data = this.housesService.filterByRooms();
    }
    if (this.filter === 'noData') {
      this.data = this.housesService.filterMissingData();
    }
    if (this.filter === 'distance') {
      this.data = this.housesService.filterDistance();
      this.houseToMove = this.housesService.bestHouse(this.data);
    }
  }
}
