import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { EventService } from '../shared/event-service.service';
import {map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class EventsResolverService implements Resolve<any> {

  constructor(private eventService: EventService) { }

  resolve(router: ActivatedRouteSnapshot){
    return this.eventService.getEvent(router.params['joe'])
  }
}
