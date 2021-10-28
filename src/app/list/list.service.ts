import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { NecessaryIngredient } from '../domain/NecessaryIngredient';
import { environment } from '../../environments/environment';
import { RecipeIngredient } from "../domain/RecipeIngredient";

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(private httpClient: HttpClient) { }

  getList({ recipes = <number[]>[] }): Observable<Array<RecipeIngredient>> {
    const params = new HttpParams()
      .appendAll({ 'recipes': recipes });
    const headers = new HttpHeaders()
      .set('Accept', [ 'application/json' ]);
    return this.httpClient.get<Array<RecipeIngredient>>(
      `${ environment.basePath }/list`,
      { params, headers });
  }

}
