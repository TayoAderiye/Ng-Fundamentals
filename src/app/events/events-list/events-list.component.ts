import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/shared/event-service.service';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import {IEvent} from '../../shared/index'
@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {

  events!: IEvent[];
  constructor(private eventService: EventService,
              private route: ActivatedRoute) {

   }

  ngOnInit(): void {
    // this.eventService.getEvents().subscribe(events => {
    //   this.events = events
    // })
    this.events = this.route.snapshot.data['events']
  }


}
