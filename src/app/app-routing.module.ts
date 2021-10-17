import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PlanComponent } from './plan/plan.component';
import { PlanResolve } from './plan/plan.resolve';

const routes: Routes = [
  { path: '', component: PlanComponent, resolve: { plan: PlanResolve } },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
