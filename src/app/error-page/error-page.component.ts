import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.scss']
})
export class ErrorPageComponent implements OnInit {
  erroData: any;
  date: Date;
  constructor() { 
    this.date = new Date();
  }

  ngOnInit(): void {
    this.erroData = history.state ?? {};
  }

  get errorInfo() {
    const values = [];
    for (const [key, value] of Object.entries(this.erroData)) {
      values.push({ key, value });
    }

    return values;
  }

}
