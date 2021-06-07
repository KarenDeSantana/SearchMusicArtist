import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainViewComponent } from './components/main-view/main-view.component';
import { DetailViewComponent } from './components/detail-view/detail-view.component';

const routes: Routes = [
  { path: '', redirectTo: 'artists', pathMatch: 'full'},
  { path: 'artists', component: MainViewComponent },
  { path: 'artists/:name', component: DetailViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
