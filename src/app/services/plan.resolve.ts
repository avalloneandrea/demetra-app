import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable, take } from 'rxjs';

import { PlanService } from './plan.service';
import { Recipe } from '../domain/Recipe';

@Injectable({
  providedIn: 'root'
})
export class PlanResolve implements Resolve<Array<Recipe>> {

  constructor(private service: PlanService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<Array<Recipe>> {
    return this.service.getPlan(route.queryParams)
      .pipe(take(1));
  }

}
