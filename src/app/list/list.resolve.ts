import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, take } from 'rxjs';

import { ListService } from './list.service';
import { NecessaryIngredient } from '../domain/NecessaryIngredient';

@Injectable({
  providedIn: 'root'
})
export class ListResolve {

  constructor(private service: ListService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Array<NecessaryIngredient>> {
    return this.service.getList(route.queryParams)
      .pipe(take(1));
  }

}
