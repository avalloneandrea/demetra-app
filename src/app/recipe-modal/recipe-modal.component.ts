import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { debounceTime, distinctUntilChanged, filter, fromEvent, tap } from "rxjs";
import { RecipeService } from "../recipe.service";
import { Recipe } from "../domain/Recipe";

@Component({
  selector: 'recipe-modal',
  templateUrl: './recipe-modal.component.html',
  styleUrls: [ './recipe-modal.component.scss' ]
})
export class RecipeModalComponent implements AfterViewInit {

  isActive: boolean = false;
  @ViewChild('input') input!: ElementRef;
  recipes: Array<Recipe> = [];

  constructor(private recipeService: RecipeService) { }

  ngAfterViewInit(): void {
    fromEvent(this.input.nativeElement, 'keyup').pipe(
      filter(Boolean),
      debounceTime(1000),
      distinctUntilChanged(),
      tap(_ => {
        const text: string = this.input.nativeElement.value;
        this.recipeService.getRecipes(text).subscribe(recipes => this.recipes = recipes);
      })).subscribe();
  }

  activate(): void {
    this.isActive = true;
    setTimeout(() => this.input.nativeElement.focus());
  }

  deactivate(): void {
    this.isActive = false;
  }

}
