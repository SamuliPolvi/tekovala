import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PoemComponent } from './poem/poem.component';
import { ListComponent } from './list/list.component'
import { InfoComponent } from './info/info.component';

const routes: Routes = [
  { path: '', component: PoemComponent },
  { path: 'list', component: ListComponent },
  { path: 'info', component: InfoComponent },
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule {}