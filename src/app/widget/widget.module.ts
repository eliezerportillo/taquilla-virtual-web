import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketComponent } from './ticket/ticket.component';
import { ParallaxDirective } from './parallax.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { EventDatePipe } from './pipes/event-date.pipe';
import { EventTimePipe } from './pipes/event-time.pipe';



@NgModule({
  declarations: [
    TicketComponent,
    ParallaxDirective,
    EventDatePipe,
    EventTimePipe
  ],
  imports: [
    CommonModule,
    
  ],
  exports: [
    EventDatePipe,
    EventTimePipe,
    ParallaxDirective,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatTabsModule,
    MatGridListModule,
    MatListModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule]
})
export class WidgetModule { }
