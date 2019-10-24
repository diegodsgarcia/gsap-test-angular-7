import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaygroundRoutingModule } from './playground-routing.module';
import { PlaygroundService } from './service/playground.service';
import { HttpClientModule } from '@angular/common/http';
import { PlaygroundComponent } from './playground.component';
import { AccordionComponent } from './component/accordion.component';

@NgModule({
  declarations: [
    PlaygroundComponent,
    AccordionComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    PlaygroundRoutingModule
  ],
  providers: [
    PlaygroundService
  ]
})
export class PlaygroundModule { }
