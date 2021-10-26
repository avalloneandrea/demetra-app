import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlanDashboardComponent } from './components/plan-dashboard/plan-dashboard.component';
import { ListComponent } from './list/list.component';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipeIngredientPipe } from './recipe/recipe-ingredient.pipe';
import { RecipeModalComponent } from './recipe-modal/recipe-modal.component';
import { PlanEditorComponent } from './components/plan-editor/plan-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    PlanDashboardComponent,
    RecipeComponent,
    RecipeIngredientPipe,
    RecipeModalComponent,
    PlanEditorComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
