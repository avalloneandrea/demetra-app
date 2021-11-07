import { RecipeIngredient } from './RecipeIngredient';

export interface Recipe {

  id?: number;
  name?: string;
  reference?: string;
  ingredients?: Array<RecipeIngredient>;
  categories?: Array<string>;

}
