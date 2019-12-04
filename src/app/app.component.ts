import { Component, OnInit, AfterViewInit } from '@angular/core';
import { gsap } from 'gsap';

const plugins = [gsap];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  constructor() {
  }

  ngAfterViewInit() {
    gsap.from('nav a', { opacity: 0, duration: 1, stagger: .5 });
  }
}
