import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorldwideComponent } from './worldwide/worldwide.component'; 
import { CountryComponent } from './country/country.component';

const routes: Routes = [
  {path: '', component: WorldwideComponent },
  {path: 'country', component: CountryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
