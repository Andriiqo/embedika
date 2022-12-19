import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryComponent } from './components/pages/country/country.component';
import { ListComponent } from './components/pages/list/list.component';


const routes: Routes = [
  {title: 'List', path: '', component: ListComponent},
  {title: 'Country', path: 'country/:id', component: CountryComponent},
  { path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
