import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ParallaxDirective } from './parallax.directive';
import { EventDatePipe } from './pipes/event-date.pipe';
import { EventTimePipe } from './pipes/event-time.pipe';

@NgModule({
  declarations: [
    ParallaxDirective,
    EventDatePipe,
    EventTimePipe
  ],
  imports: [],
  exports: [
    EventTimePipe,
    EventDatePipe,
    ParallaxDirective,

    
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    // MatToolbarModule,
    // MatFormFieldModule,
    // MatInputModule,
    // MatButtonModule,
    // MatSnackBarModule,
    // MatMenuModule,
    // MatIconModule,
    // MatListModule,
    // MatProgressSpinnerModule,
    // MatProgressBarModule,
    // MatCardModule,
    // MatBottomSheetModule,
    // MatTabsModule,
    // MatDialogModule,
    // MatChipsModule,
    // MatCheckboxModule,
  ]

})
export class WidgetModule { }
