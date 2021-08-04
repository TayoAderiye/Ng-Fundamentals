import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from 'src/app/shared/index';
@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
  newEvent: any
  isDirty = true
  constructor(private router: Router,
              private eventService: EventService) { }

  ngOnInit(): void {
  }
  cancel(){
    this.router.navigate(['/events'])
  }
  saveEvent(formValues: any){
    this.eventService.saveEvent(formValues).subscribe(() => {
      this.isDirty = false
      this.router.navigate(['/events'])
    })

  }


}
