import { Component, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, switchMap } from 'rxjs';

import { Recipe } from '../../domain/Recipe';
import { RecipeIngredient } from '../../domain/RecipeIngredient';
import { ListService } from '../../list/list.service';

@Component({
  selector: 'plan-editor',
  templateUrl: './plan-editor.component.html',
  styleUrls: [ './plan-editor.component.scss' ]
})
export class PlanEditorComponent {

  plan: Array<Recipe>;
  list$: Observable<Array<RecipeIngredient>>;

  change = new EventEmitter<Array<Recipe>>();

  constructor(private route: ActivatedRoute, private listService: ListService) {
    this.plan = this.route.snapshot.data.plan;
    this.list$ = this.change.pipe(
      map(recipes => recipes.filter(recipe => recipe.id).map(r => r.id!)),
      switchMap(recipes => this.listService.getList({recipes}))
    );
  }

  ngAfterViewInit(): void {
    this.change.emit(this.plan);
  }

  onReplace(prev: Recipe, next: Recipe) {
    const index = this.plan.findIndex(recipe => recipe.id === prev.id);
    this.plan[index] = next;
    this.change.emit(this.plan);
  }

  onDelete(prev: Recipe) {
    const index = this.plan.findIndex(recipe => recipe.id === prev.id);
    this.plan[index] = {name: 'placeholder'}; // TODO TBD
    this.change.emit(this.plan);
  }

}
