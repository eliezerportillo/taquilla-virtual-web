import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnlyLoggedInUsersGuard } from '../login/only-logged-in-users.guard';
import { EventDetailsComponent } from './event-details/event-details.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    { path: ':id', component: EventDetailsComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EventsRoutingModule { }
