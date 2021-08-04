import { Component, OnInit } from '@angular/core';
import { EventService, ISession } from 'src/app/shared';
import { AuthService } from 'src/app/user/auth.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  searchTerm = ''
  foundSessions!: ISession[];
  constructor(public auth: AuthService, private eventService: EventService) { }

  ngOnInit(): void {
  }
  searchSessions(searchTerm: any){
    this.eventService.searchSessions(searchTerm)
    .subscribe(sessions => {
      this.foundSessions = sessions
      // console.log(this.foundSessions)
    })
  }

}
