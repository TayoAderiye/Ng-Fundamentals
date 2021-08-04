import { Component, OnInit, Input, Output } from '@angular/core';
// import { EventEmitter } from 'stream';
import { IEvent } from '../../shared/event.model'

@Component({
  selector: 'app-event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.css']
})
export class EventThumbnailComponent implements OnInit {
  @Input() event!: IEvent;
  // someProp:any = 'sfsffs'
  // logFoo(){
  //   console.log('logFol')
  // }
  // getStartTimeClass(){
  //   const isEarlyStart =  this.event && this.event.time === '8:00 am'
  //   return {green: isEarlyStart, bold: isEarlyStart}
  // }
  getStartTimeClass(){
    if(this.event && this.event.time === '8:00 am')
    return ['green', 'bold']
    return []
  }



  constructor() { }

  ngOnInit(): void {
  }


}
