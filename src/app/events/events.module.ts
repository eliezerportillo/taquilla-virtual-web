import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { HomeComponent } from './home/home.component';
import { EventsRoutingModule } from './events-routing.module';
import { EventDetailsComponent } from './event-details/event-details.component';
import { WidgetModule } from '../widget/widget.module';





@NgModule({
  declarations: [
    HomeComponent,
    EventDetailsComponent
  ],
  imports: [
    CommonModule,
    EventsRoutingModule,
    WidgetModule,

    MatToolbarModule,
    MatCardModule,
    MatTabsModule,
    MatListModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class EventsModule { }
