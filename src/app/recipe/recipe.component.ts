import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

import { Recipe } from '../domain/Recipe';
import { RecipeModalComponent } from "../recipe-modal/recipe-modal.component";

@Component({
  selector: 'recipe',
  templateUrl: './recipe.component.html',
  styleUrls: [ './recipe.component.scss' ]
})
export class RecipeComponent implements OnInit {

  @Input()
  recipe: Recipe = { };

  @ViewChild('modal') modal!: RecipeModalComponent;

  constructor() { }

  ngOnInit(): void { }

  showModal() {
    this.modal.activate();
  }

}
