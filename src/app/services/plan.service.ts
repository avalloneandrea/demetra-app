import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Recipe } from '../domain/Recipe';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlanService {

  constructor(private httpClient: HttpClient) { }

  getPlan({days = 7, people = 2}): Observable<Array<Recipe>> {
    const params = new HttpParams()
      .set('days', days)
      .set('people', people);
    const headers = new HttpHeaders()
      .set('Accept', [ 'application/json' ]);
    return this.httpClient.get<Array<Recipe>>(
      `${environment.basePath}/plan`,
      {params, headers});
  }

}
