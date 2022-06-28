import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { DEFAULT_INTERRUPTSOURCES, Idle } from '@ng-idle/core';
import { Keepalive } from '@ng-idle/keepalive';
import { IOrder } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  // some fields to store our state so we can display it in the UI
  idleState = "NOT_STARTED";
  countdown?: number;
  lastPing?: Date;

  constructor(
    private router: Router,
    public idle: Idle,
    // private keepalive: Keepalive
  ) {
    this.countdown = undefined;
    this.lastPing = undefined;
    this.initIdle()
  }

  hasSession(): boolean {
    return sessionStorage.getItem('order') ? true : false;
  }

  setSession(order: IOrder) {
    sessionStorage.setItem('order', JSON.stringify(order));
  }

  removeSession() {
    sessionStorage.removeItem('order');
  }

  getSession(): IOrder {
    const order = sessionStorage.getItem('order');
    if (!order) {
      this.router.navigate(['events']);
    }
    return JSON.parse(order || '') as IOrder;
  }

  private initIdle() {
    // set idle parameters
    this.idle.setIdle(60); // how long can they be inactive before considered idle, in seconds
    this.idle.setTimeout(60 * 5); // how long can they be idle before considered timed out, in seconds
    this.idle.setInterrupts(DEFAULT_INTERRUPTSOURCES); // provide sources that will "interrupt" aka provide events indicating the user is active

    // do something when the user becomes idle
    this.idle.onIdleStart.subscribe(() => {
      this.idleState = "IDLE";
    });
    // do something when the user is no longer idle
    this.idle.onIdleEnd.subscribe(() => {
      this.idleState = "NOT_IDLE";
      console.log(`${this.idleState} ${new Date()}`)
      this.countdown = undefined;
    });
    // do something when the user has timed out
    this.idle.onTimeout.subscribe(() => {
      this.idleState = "TIMED_OUT";
    });
    // do something as the timeout countdown does its thing
    this.idle.onTimeoutWarning.subscribe(seconds => this.countdown = seconds);

    // // set keepalive parameters, omit if not using keepalive
    // this.keepalive.interval(15); // will ping at this interval while not idle, in seconds
    // this.keepalive.onPing.subscribe(() => this.lastPing = new Date()); // do something when it pings
  }

  private reset() {
    // we'll call this method when we want to start/reset the idle process
    // reset any component state and be sure to call idle.watch()
    this.idle.watch();
    this.idleState = "NOT_IDLE";
    this.countdown = undefined;
    this.lastPing = undefined;
  }
}


