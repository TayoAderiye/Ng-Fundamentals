import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/shared/event-service.service';
import { ActivatedRoute, Params } from '@angular/router';
import { IEvent, ISession } from 'src/app/shared';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  event: any
  addMode!: boolean;
  filterBy = 'all'
  sortBy = 'votes'
  constructor(private eventService: EventService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      this.eventService.getEvent(+params['id']).subscribe((event: IEvent) => {
        this.event = event
        this.addMode = false
      })

    })
   // this.event = this.eventService.getEvent(+this.route.snapshot.params['id'])
  }

  addSession(){
    this.addMode = true
  }

  saveNewSession(session: ISession){
    const nextId = Math.max.apply(null, this.event.sessions.map((s: { id: any; }) => s.id))
    session.id = nextId + 1
    this.event.sessions.push(session)
    this.eventService.saveEvent(this.event).subscribe()
    this.addMode = false

  }
  cancelAddSession(){
    this.addMode = false
  }

}
