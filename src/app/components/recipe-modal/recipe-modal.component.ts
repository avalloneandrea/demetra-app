import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, EMPTY, filter, Observable, switchMap } from 'rxjs';

import { Recipe } from '../../domain/Recipe';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'recipe-modal',
  templateUrl: './recipe-modal.component.html',
  styleUrls: [ './recipe-modal.component.scss' ]
})
export class RecipeModalComponent {

  @ViewChild('input')
  input!: ElementRef;

  isActive: boolean;
  query: FormControl;
  recipes$: Observable<Array<Recipe>>;

  @Output()
  select: EventEmitter<Recipe> = new EventEmitter<Recipe>();

  constructor(private recipeService: RecipeService) {
    this.isActive = false;
    this.query = new FormControl('');
    this.recipes$ = EMPTY;
  }

  activate(): void {
    setTimeout(() => this.input.nativeElement.focus());
    this.isActive = true;
    this.query.setValue('');
    this.recipes$ = this.query.valueChanges.pipe(
      debounceTime(500),
      filter((query: string) => query.length >= 3),
      distinctUntilChanged(),
      switchMap((query: string) => this.recipeService.getRecipes(query))
    );
  }

  deactivate(): void {
    this.isActive = false;
  }

  onClick(recipe: Recipe): void {
    this.select.emit(recipe);
    this.isActive = false;
  }

}
