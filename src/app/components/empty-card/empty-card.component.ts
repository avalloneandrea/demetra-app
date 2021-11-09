import { Component, EventEmitter, Output, ViewChild } from '@angular/core';

import { RecipeModalComponent } from '../recipe-modal/recipe-modal.component';
import { Recipe } from '../../domain/Recipe';

@Component({
  selector: 'empty-card',
  templateUrl: './empty-card.component.html',
  styleUrls: [ './empty-card.component.scss' ]
})
export class EmptyCardComponent {

  @ViewChild('modal')
  modal!: RecipeModalComponent;

  @Output()
  replace = new EventEmitter<Recipe>();

  onClick() {
    this.modal.activate();
  }

  onSelect(next: Recipe) {
    this.replace.emit(next);
  }

}
