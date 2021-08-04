import { Component } from '@angular/core';
import { AuthService } from './user/auth.service';

@Component({
  selector: 'events-app',
  templateUrl: './app.component.html',




})
export class EventsAppComponent {
  constructor(private auth: AuthService){}

  ngOnInit(){
    this.auth.checkAuthenticationStatus()
  }
}
