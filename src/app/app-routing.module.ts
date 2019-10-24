import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'page',
    loadChildren: './page/page.module#PageModule',
  },
  {
    path: 'playground',
    loadChildren: './playground/playground.module#PlaygroundModule',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
