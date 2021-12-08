import { query, transition, trigger, useAnimation } from '@angular/animations';
import { Component, EventEmitter, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxLoginWithAmazonButtonComponent, NgxLoginWithAmazonButtonService } from 'ngx-login-with-amazon-button';
import { bindCallback, filter, finalize, map, switchMap, take } from 'rxjs';

import { fadeIn } from '../../app-animations';
import { Recipe } from '../../domain/Recipe';
import { RecipeIngredient } from '../../domain/RecipeIngredient';
import { AlexaService } from '../../services/alexa/alexa.service';
import { ListService } from '../../services/list/list.service';

@Component({
  selector: 'plan-editor',
  templateUrl: './plan-editor.component.html',
  styleUrls: [ './plan-editor.component.scss' ],
  animations: [ trigger('animate', [
    transition(':enter', [
      query('.card, .panel', [
        useAnimation(fadeIn) ]) ]) ]) ]
})
export class PlanEditorComponent {

  @ViewChild('button')
  button!: NgxLoginWithAmazonButtonComponent;

  plan: Array<Recipe>;
  list: Array<RecipeIngredient>;
  change = new EventEmitter<Array<Recipe>>();

  constructor(private route: ActivatedRoute, private alexaService: AlexaService, private listService: ListService, private lwaService: NgxLoginWithAmazonButtonService) {
    this.plan = this.route.snapshot.data.planAndList.plan;
    this.list = this.route.snapshot.data.planAndList.list;
    this.change
      .pipe(switchMap(recipes => this.listService.getList(Object.assign({}, { recipes }, this.route.snapshot.queryParams))))
      .subscribe(list => this.list = list);
  }

  onReplace(prev: Recipe, next: Recipe) {
    const index = this.plan.findIndex(recipe => recipe.id === prev.id);
    this.plan[index] = next;
    this.change.emit(this.plan);
  }

  onDelete(prev: Recipe) {
    const index = this.plan.findIndex(recipe => recipe.id === prev.id);
    this.plan[index] = {};
    this.change.emit(this.plan);
  }

  onClick() {
    this.button.handleOnClick();
  }

  onAuthorize(auth: any) {
    bindCallback(this.lwaService.sdk.retrieveProfile)(auth.access_token).pipe(
      filter((response: RetrieveProfileResponse) => response.success),
      map((response: RetrieveProfileResponse) => (<RetrieveProfileResponseSuccess>response).profile.CustomerId!),
      switchMap((accountId: string) => this.alexaService.addItems(Object.assign({}, { accountId }, { recipes: this.plan }, this.route.snapshot.queryParams))),
      take(1),
      finalize(() => this.lwaService.sdk.logout()))
      .subscribe();
  }

}
