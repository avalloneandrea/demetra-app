import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Recipe } from '../../domain/Recipe';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(protected httpClient: HttpClient) { }

  getRecipes(query = '' ): Observable<Array<Recipe>> {
    const params = new HttpParams()
      .set('query', query);
    const headers = new HttpHeaders()
      .set('Accept', [ 'application/json' ]);
    return this.httpClient.get<Array<Recipe>>(
      `${ environment.basePath }/recipe`,
      { params, headers });
  }

}
