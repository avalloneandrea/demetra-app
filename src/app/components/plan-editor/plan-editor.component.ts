import { Component, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';

import { Recipe } from '../../domain/Recipe';
import { RecipeIngredient } from '../../domain/RecipeIngredient';
import { ListService } from '../../services/list/list.service';

@Component({
  selector: 'plan-editor',
  templateUrl: './plan-editor.component.html',
  styleUrls: [ './plan-editor.component.scss' ]
})
export class PlanEditorComponent {

  plan: Array<Recipe>;
  list: Array<RecipeIngredient>;
  change = new EventEmitter<Array<Recipe>>();

  constructor(private route: ActivatedRoute, private listService: ListService) {
    this.plan = this.route.snapshot.data.planAndList.plan;
    this.list = this.route.snapshot.data.planAndList.list;
    this.change
      .pipe(switchMap(recipes => this.listService.getList(Object.assign({}, {recipes}, this.route.snapshot.queryParams))))
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

}
