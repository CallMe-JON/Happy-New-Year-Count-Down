import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { interval, Subscription } from 'rxjs';
import * as moment from 'moment-timezone';

@Component({
  selector: 'app-countdown',
  imports: [CommonModule],
  templateUrl: './countdown.html',
  styleUrls: ['./countdown.css'],
})
export class Countdown implements OnInit, OnDestroy {
  subscription?: Subscription;
  showFireworks = false;

  timeLeft: any = { days: 0, hours: 0, minutes: 0, seconds: 0 };
  // targetDate = new Date('January 01, 2026 00:00:00').getTime();
  targetDate = new Date('December 30, 2025 13:23:00').getTime();

  constructor(private router: Router, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.updateCountdown();
    this.subscription = interval(1000).subscribe(() => {
      this.updateCountdown();
      this.cdr.markForCheck();
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  updateCountdown() {
    const now = new Date().getTime();
    const nowMyanmar = moment.tz('Asia/Yangon').valueOf();
    const distance = this.targetDate - nowMyanmar;

    if (distance <= 0) {
      if (this.subscription) {
        this.subscription.unsubscribe();
      }

      setTimeout(() => {
        this.router.navigate(['message/byjon']);
      }, 10);

      return;
    }

    this.timeLeft = {
      days: Math.floor(distance / (1000 * 60 * 60 * 24)),
      hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((distance / (1000 * 60)) % 60),
      seconds: Math.floor((distance / 1000) % 60),
    };
  }
}
