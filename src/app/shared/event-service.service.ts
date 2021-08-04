import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IEvent, ISession } from '../shared/event.model';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) { }

  getEvents():Observable<IEvent[]>{
    return this.http.get<IEvent[]>('/api/events')
      .pipe(catchError(this.handleError<IEvent[]>('getEvents', [])))
  }

  getEvent(id: number):Observable<IEvent>{
    return this.http.get<IEvent>('/api/events/' + id)
      .pipe(catchError(this.handleError<IEvent>('getEvent')))
  }
  saveEvent(event: IEvent){
    const options = {headers: new HttpHeaders({'Content-Type': 'application/json'})}
    return this.http.post<IEvent>('/api/events', event, options)
      .pipe(catchError(this.handleError<IEvent>('saveEvents')))
  }
  // updateEvent(event: IEvent){
  //   let index = EVENTS.findIndex(x => x.id = event.id)
  //   EVENTS[index] = event
  // }
  // searchSessions(searchTerm: string){
  //   var term = searchTerm.toLocaleLowerCase()
  //   var results: ISession[] = []

  //   EVENTS.forEach(event => {
  //     var matchingSessions = event.sessions.filter(session => session.name.toLocaleLowerCase().indexOf(term) > -1)
  //     matchingSessions = matchingSessions.map((session:any) => {
  //       session.eventId = event.id
  //       return session
  //     })
  //     results = results.concat(matchingSessions)
  //   })

  //   var emitter = new EventEmitter(true)
  //   setTimeout(() => {
  //     emitter.emit(results)
  //   }, 100)
  //   return emitter
  // }
  searchSessions(searchTerm: string): Observable<ISession[]> {
    return this.http.get<ISession[]>('/api/sessions/search?search=' + searchTerm)
      // .pipe(catchError(this.handleError>('searchSessions')))
  }




  private handleError<T> (operation = 'operation', result?: T){
    return (error: any): Observable<T> => {
      console.error(error)
      return of (result as T)
    }
  }


}
