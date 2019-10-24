import { Component, OnInit, NgModuleFactoryLoader } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private loader: NgModuleFactoryLoader) {
  }

  ngOnInit() {
  }
}
