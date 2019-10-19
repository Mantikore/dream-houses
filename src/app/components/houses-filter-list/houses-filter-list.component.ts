import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { HousesService } from '../../services/houses.service';
import { Observable } from 'rxjs';
import { House } from '../../models/house';

@Component({
  selector: 'app-houses-filter-list',
  templateUrl: './houses-filter-list.component.html',
  styleUrls: ['./houses-filter-list.component.scss']
})
export class HousesFilterListComponent implements OnInit, OnChanges {

  @Input() filter: string;
  @Input() originAdr: string;
  data: Observable<House[]>;
  houseToMove: Observable<House>;

  constructor(
    private housesService: HousesService
  ) {}

  ngOnChanges(): void {
    if (this.filter === 'distance') {
      this.data = this.housesService.filterDistance(this.originAdr);
      this.houseToMove = this.housesService.bestHouse(this.data);
    }
  }

  ngOnInit(): void {
    if (this.filter === 'rooms') {
      this.data = this.housesService.filterByRooms();
    }
    if (this.filter === 'noData') {
      this.data = this.housesService.filterMissingData();
    }
  }
}
