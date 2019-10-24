import { Component, Input, ViewChild, AfterViewInit } from '@angular/core';
@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements AfterViewInit {
  @ViewChild('content') content;
  @Input() icon;
  @Input() title;
  @Input() open = true;
  initHeight: number;

  ngAfterViewInit() {
    this.initHeight = this.content.nativeElement.scrollHeight;
    this.collapse();
  }

  collapse() {
    if (this.open) {
      this.content.nativeElement.style.height = `${this.initHeight}px`;
    } else {
      this.content.nativeElement.style.height = 0;
    }
  }

  toggle() {
    this.open = !this.open;
    this.collapse();
  }
}
