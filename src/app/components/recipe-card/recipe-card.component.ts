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
  recipe!: Recipe;

  @ViewChild('modal')
  modal!: RecipeModalComponent;

  @Output()
  replace = new EventEmitter<Recipe>();

  @Output()
  delete = new EventEmitter<Recipe>();

  onReplace() {
    this.modal.activate();
  }

  onSelect(next: Recipe) {
    this.replace.emit(next);
  }

  onDelete() {
    this.delete.emit();
  }

}
