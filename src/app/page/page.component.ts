import { Component, OnInit, NgModuleFactoryLoader } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

  constructor(
    private loader: NgModuleFactoryLoader,
  ) {
  }

  ngOnInit() {
    this.loader.load('./playground/playground.module#PlaygroundModule').then(m => {
      console.log(m);
    });
  }
}
