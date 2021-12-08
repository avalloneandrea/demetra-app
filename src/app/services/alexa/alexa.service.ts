import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";

import { Recipe } from "../../domain/Recipe";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AlexaService {

  constructor(private httpClient: HttpClient) { }

  addItems({ accountId = '', recipes = <Array<Recipe>>[], people = 1 }): Observable<Response> {
    const params = new HttpParams()
      .set('accountId', accountId)
      .appendAll({
        'recipes': recipes
          .map(recipe => recipe.id!)
          .filter(Boolean)
          .map(id => Array(Number(people)).fill(id))
          .flat()
      });
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded');
    return this.httpClient.post<Response>(
      `${environment.basePath}/alexa/items`,
      params, { headers });
  }

}
