import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { Fireworks } from 'fireworks-js';

@Component({
  selector: 'app-messange',
  imports: [CommonModule],
  templateUrl: './messange.html',
  styleUrl: './messange.css',
})
export class Messange {

  @ViewChild('fireworksContainer') fireworksContainer!: ElementRef;
  
  isPlaying = false;
  screenVisible = false;
  stopTime = 1000;
  fireworks!: Fireworks;

  playMusic(audio: HTMLAudioElement) {
    audio.currentTime = 32;
    audio.play();
    this.isPlaying = true;

    const checkTime = () => {
      if (audio.currentTime >= this.stopTime) {
        this.stopMusic(audio);
        audio.removeEventListener('timeupdate', checkTime);
      }
    };
    audio.addEventListener('timeupdate', checkTime);
  }
  stopMusic(audio: HTMLAudioElement) {
    audio.pause();
    audio.currentTime = 32;
    this.isPlaying = false;
  }
  showScreen() {
    this.screenVisible = true;
    setTimeout(() => this.startFireworks(), 100);
  }
  startFireworks() {
    this.fireworks = new Fireworks(this.fireworksContainer.nativeElement, {
      rocketsPoint: { min: 0, max: 100 },
      acceleration: 1.05,
      friction: 0.97,
      gravity: 1.4,
      particles: 80,
      explosion: 5
    });

    this.fireworks.start();

    setTimeout(() => this.fireworks.stop(), 200000);
  }
}
