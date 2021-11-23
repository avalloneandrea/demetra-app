import { Pipe, PipeTransform } from '@angular/core';

import { RecipeIngredient } from '../../domain/RecipeIngredient';

@Pipe({
  name: 'recipeIngredient'
})
export class RecipeIngredientPipe implements PipeTransform {

  transform(value: RecipeIngredient): string {

    const name = value?.ingredient?.name || '';
    const unit = value?.ingredient?.unit || '';
    const quantity = value?.quantity || '';

    if (unit === 'g')
      return `${ quantity } ${ unit } ${ $localize `of` } ${ name.toLowerCase() }`;

    if (unit === 'u')
      return `${ quantity } ${ name.toLowerCase() }`;

    if (unit === 'd')
      return `${ quantity } ${ quantity === 1 ? $localize `dose` : $localize `doses` } ${ $localize `of` } ${name.toLowerCase()}`;

    if (unit === 'qb')
      return `${ name } ${ unit }`;

    return '';

  }

}
