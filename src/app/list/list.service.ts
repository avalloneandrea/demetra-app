import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { NecessaryIngredient } from '../domain/NecessaryIngredient';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(protected httpClient: HttpClient) { }

  getList({ recipes = [] }): Observable<Array<NecessaryIngredient>> {
    const params = new HttpParams()
      .appendAll({ 'recipes': recipes });
    const headers = new HttpHeaders()
      .set('Accept', [ 'application/json' ]);
    return this.httpClient.get<Array<NecessaryIngredient>>(
      `${ environment.basePath }/list`,
      { params, headers });
  }

}
