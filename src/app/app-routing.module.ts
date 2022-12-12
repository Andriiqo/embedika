import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './components/card/card.component';
import { ListComponent } from './components/list/list.component';

const routes: Routes = [
  {title: 'List', path: '', component: ListComponent},
  {title: 'Card', path: 'card/:id', component: CardComponent},
  { path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
