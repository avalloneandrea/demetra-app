import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { forkJoin, map, Observable, of, switchMap, take } from 'rxjs';

import { Recipe } from '../../domain/Recipe';
import { ListService } from "../../services/list/list.service";
import { PlanService } from '../../services/plan/plan.service';

@Injectable({
  providedIn: 'root'
})
export class PlanEditorResolve implements Resolve<Array<Recipe>> {

  constructor(private planService: PlanService, private listService: ListService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    return this.planService.getPlan(route.queryParams).pipe(
      switchMap((recipes: Array<Recipe>) => forkJoin([ of(recipes), this.listService.getList(Object.assign({}, { recipes }, route.queryParams)) ])),
      map(([ plan, list ]) => ({ plan, list })),
      take(1));
  }

}
