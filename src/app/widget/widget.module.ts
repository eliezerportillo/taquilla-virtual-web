import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TicketComponent } from './ticket/ticket.component';
import { ParallaxDirective } from './parallax.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { EventDatePipe } from './pipes/event-date.pipe';
import { EventTimePipe } from './pipes/event-time.pipe';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';



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
    CommonModule,
    FlexLayoutModule,
    EventDatePipe,
    EventTimePipe,
    ParallaxDirective,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    MatMenuModule,
    MatIconModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatCardModule,
    MatBottomSheetModule,
    MatTabsModule,
    MatDialogModule]

})
export class WidgetModule { }
