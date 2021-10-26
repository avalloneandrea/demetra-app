import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PlanDashboardComponent } from './components/plan-dashboard/plan-dashboard.component';
import { PlanEditorComponent } from './components/plan-editor/plan-editor.component';
import { ListComponent } from './list/list.component';
import { ListResolve } from './list/list.resolve';
import { PlanResolve } from './services/plan.resolve';

const routes: Routes = [
  { path: 'plan-dashboard', component: PlanDashboardComponent},
  { path: 'plan-editor', component: PlanEditorComponent, resolve: { plan: PlanResolve } },
  { path: 'list', component: ListComponent, resolve: { list: ListResolve } },
  { path: '**', redirectTo: 'plan-dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
