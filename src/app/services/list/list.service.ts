import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Recipe } from '../../domain/Recipe';
import { RecipeIngredient } from '../../domain/RecipeIngredient';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(private httpClient: HttpClient) { }

  getList({ recipes = <Array<Recipe>>[], people = 1 }): Observable<Array<RecipeIngredient>> {
    const params = new HttpParams()
      .appendAll({
        'recipes': recipes
          .map(recipe => recipe.id!)
          .filter(Boolean)
          .map(id => Array(Number(people)).fill(id))
          .flat()
      });
    const headers = new HttpHeaders()
      .set('Accept', 'application/json');
    return this.httpClient.get<Array<RecipeIngredient>>(
      `${environment.basePath}/list`,
      { params, headers });
  }

}
