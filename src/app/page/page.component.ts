import { Component, AfterViewInit, ElementRef } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements AfterViewInit {

  items = new Array(50).fill('Test');

  constructor(
    private elementRef: ElementRef,
  ) {
  }

  ngAfterViewInit() {
    const { nativeElement } = this.elementRef;
    const elements = nativeElement.querySelectorAll('p');

    gsap.from(elements, { opacity: 0, x: 30, duration: 1, stagger: .3});

  }
}
