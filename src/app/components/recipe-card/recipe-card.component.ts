import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';

import { RecipeModalComponent } from '../recipe-modal/recipe-modal.component';
import { Recipe } from '../../domain/Recipe';

@Component({
  selector: 'recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: [ './recipe-card.component.scss' ]
})
export class RecipeCardComponent {

  @Input()
  recipe?: Recipe;

  @ViewChild('modal')
  modal!: RecipeModalComponent;

  @Output()
  replace = new EventEmitter<Recipe>();

  @Output()
  delete = new EventEmitter<Recipe>();

  activate() {
    this.modal.activate();
  }

  onDelete() {
    this.delete.emit();
  }

  onReplace(next: Recipe) {
    this.replace.emit(next);
  }

}
