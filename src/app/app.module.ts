import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { appRoutes } from './router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { Toastr, TOASTR_TOKEN } from './common/toastr.service';
import { JQ_TOKEN } from './common/index';
import {HttpClientModule} from '@angular/common/http'
import { EventsAppComponent } from './events-app.component';
import { NavbarComponent } from './nav/navbar/navbar.component';
import { ToastrModule } from 'ngx-toastr';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { F404Component } from './errors/f404/f404.component';
import { ProfileComponent } from './user/profile/profile.component';
import {
  EventDetailsComponent,
  EventsListComponent,
  EventService,
  CreateEventComponent,
  EventThumbnailComponent,
  EventsResolverService

} from './events/index';
import { CreateSessionComponent } from './event-details/create-session/create-session.component';
import { SessionListComponent } from './event-details/session-list/session-list.component';
import { CollapsibleWellComponent } from './common/collapsible-well/collapsible-well.component';
import { DurationPipe } from './shared/duration.pipe';
import { SimpleModalComponent } from './common/simple-modal/simple-modal.component';
import { ModalTriggerDirective } from './common/modal-trigger.directive';
import { UpVoteComponent } from './event-details/up-vote/up-vote.component';
import { LocationValidatorDirective } from './events/create-event/location-validator.directive'

// declare let toastr: Toastr
// declare let $: any;
// declare let jQuery : Object;
// let jQuery = window['$']
@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    F404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe,
    SimpleModalComponent,
    ModalTriggerDirective,
    UpVoteComponent,
    LocationValidatorDirective,

    //ProfileComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules}),

  ],
  providers: [EventService,

              // { provide:TOASTR_TOKEN, useValue: toastr},
              // { provide:JQ_TOKEN, useValue: jQuery},
              {
                provide: 'canDeactivateCreateEvent',
                useValue: checkDirtyState
              },
              EventsResolverService
            ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent){
  if (component.isDirty)
    return window.confirm("You have not saved this event, do you really want to cancel")
  return true
}
