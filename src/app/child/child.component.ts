import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

@Output() notify:EventEmitter<CustomEvent>= new EventEmitter<CustomEvent>();



  sendNotification(){
    const eventDetails = {message : 'Hello World this is child message'};
    const customEvent = new CustomEvent('notify',{detail: eventDetails});

    this.notify.emit(customEvent)

  }

}
