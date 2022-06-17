import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute,  Router } from '@angular/router';
import { SessionService } from '../core/session.service';
import { EndSessionDialogComponent } from './end-session-dialog/end-session-dialog.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public dialog: MatDialog, private sessionService: SessionService) { }

  ngOnInit(): void {
    this.sessionService.idle.onIdleStart.subscribe(() => {
      this.sessionService.removeSession();
      const dialogRef = this.dialog.open(EndSessionDialogComponent);

      dialogRef.afterClosed().subscribe(result => {
        this.router.navigateByUrl(`/events/${this.route.snapshot.paramMap.get('id')}`);
      });
    });
  }

}
