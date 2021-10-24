import { RecipeIngredient } from './RecipeIngredient';

export interface Recipe {

  id?: number;
  name?: string;
  tags?: Array<string>;
  ingredients?: Array<RecipeIngredient>;

}
