import { NgModule } from '@angular/core';
import { RouterModule, Routes }   from '@angular/router';
import { HeroesComponent } from './component/heroes.component';
import { HeroDetailComponent } from './component/hero-detail.component';
import { DashboardComponent } from "./component/dashboard.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'heroes',
    component: HeroesComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'detail/:id',
    component: HeroDetailComponent
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
