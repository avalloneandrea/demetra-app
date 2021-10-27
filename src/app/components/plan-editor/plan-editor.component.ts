import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Recipe } from '../../domain/Recipe';

@Component({
  selector: 'plan-editor',
  templateUrl: './plan-editor.component.html',
  styleUrls: [ './plan-editor.component.scss' ]
})
export class PlanEditorComponent {

  plan: Array<Recipe>;

  constructor(private route: ActivatedRoute) {
    this.plan = this.route.snapshot.data.plan;
  }

  onReplace(prev: Recipe, next: Recipe) {
    const index = this.plan.findIndex(recipe => recipe.id === prev.id);
    this.plan[index] = next;
  }

  onDelete(prev: Recipe) {
    const index = this.plan.findIndex(recipe => recipe.id === prev.id);
    this.plan[index] = {name: "placeholder"}; // TODO TBD
  }

}
