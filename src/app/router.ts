import { Routes } from "@angular/router";
import { F404Component } from "./errors/f404/f404.component";


import {
  EventsListComponent,
  EventDetailsComponent,
  EventsListResolverService,
  CreateEventComponent,
  CreateSessionComponent,
  EventsResolverService

} from './events/index'

export const appRoutes: Routes = [
  {path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent']},
  {path: 'events', component: EventsListComponent,resolve: {events: EventsListResolverService}},
  {path: 'events/:id', component: EventDetailsComponent, resolve: {event: EventsResolverService} },
  {path: '404', component: F404Component},
  {path: '', redirectTo: '/events', pathMatch: 'full'},
  {
    path: 'user',
     loadChildren: () => import('./user/user.module')
     .then(m => m.UserModule)
    },
  {path:'events/session/new', component: CreateSessionComponent}
]
