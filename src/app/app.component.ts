import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // corrected property name
})
export class AppComponent {
  title = 'hassan1';

  array = [
    {
      name: 'Hussain',
      id: 356
    },
    {
      name: 'Musakhan',
      id: 357
    },
    {
      name: 'Hamza Butt',
      id: 358
    },
    {
      name: 'Hussain Zinda hai',
      id: 359
    }
  ];

  searchText: string = '';

  onNotify(event: CustomEvent) {
    // Handle the custom event
    console.log('Received custom event:', event.detail);
  }
}
