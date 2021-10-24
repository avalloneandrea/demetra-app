import { Pipe, PipeTransform } from '@angular/core';

import { NecessaryIngredient } from '../domain/NecessaryIngredient';
import { RecipeIngredient } from '../domain/RecipeIngredient';

@Pipe({
  name: 'recipeIngredient'
})
export class RecipeIngredientPipe implements PipeTransform {

  transform(value: RecipeIngredient | NecessaryIngredient, ...args: unknown[]): string {

    const quantity = value?.quantity || '';
    const unit = value?.ingredient?.unit || '';
    const name = value?.ingredient?.name || '';

    if (unit === 'g')
      return `${ quantity } g di ${ name.toLowerCase() }`;

    if (unit === 'u')
      return `${ quantity } ${ name.toLowerCase() }`;

    if (unit === 'd')
      return `${ quantity } dose di ${ name.toLowerCase() }`;

    if (unit === 'qb')
      return `${ name } q.b.`;

    return '';

  }

}