import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListComponent } from './list/list.component';
import { ListResolve } from './list/list.resolve';
import { PlanComponent } from './plan/plan.component';
import { PlanDashboardComponent } from './components/plan-dashboard/plan-dashboard.component';
import { PlanResolve } from './plan/plan.resolve';

const routes: Routes = [
  { path: 'plan-dashboard', component: PlanDashboardComponent},
  { path: 'plan', component: PlanComponent, resolve: { plan: PlanResolve } },
  { path: 'list', component: ListComponent, resolve: { list: ListResolve } },
  { path: '**', redirectTo: 'plan-dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
