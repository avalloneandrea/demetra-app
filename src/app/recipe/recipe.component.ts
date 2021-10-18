import { Component, Input, OnInit } from '@angular/core';

import { Recipe } from '../domain/Recipe';

@Component({
  selector: 'recipe',
  templateUrl: './recipe.component.html',
  styleUrls: [ './recipe.component.scss' ]
})
export class RecipeComponent implements OnInit {

  @Input()
  recipe: Recipe = { };

  constructor() { }

  ngOnInit(): void { }

}
