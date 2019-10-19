import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  originAdr = 'Eberswalder Str. 55';

  changeOrigin(value: string): void {
    if (value !== '') {
      this.originAdr = value.trim();
    }
  }
}
