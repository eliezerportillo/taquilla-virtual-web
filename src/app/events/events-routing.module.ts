import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventDetailsComponent } from './event-details/event-details.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    { path: ':id', component: EventDetailsComponent },
    {
        path: ':id/tickets',
        loadChildren: () => import('../tickets/tickets.module').then(m => m.TicketsModule)
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EventsRoutingModule { }
