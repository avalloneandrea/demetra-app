import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DragulaModule } from "ng2-dragula";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlanDashboardComponent } from './components/plan-dashboard/plan-dashboard.component';
import { PlanEditorComponent } from './components/plan-editor/plan-editor.component';
import { RecipeCardComponent } from './components/recipe-card/recipe-card.component';
import { RecipeModalComponent } from './components/recipe-modal/recipe-modal.component';
import { RecipeIngredientPipe } from './pipes/recipe-ingredients/recipe-ingredient.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PlanDashboardComponent,
    PlanEditorComponent,
    RecipeCardComponent,
    RecipeModalComponent,
    RecipeIngredientPipe,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    DragulaModule.forRoot(),
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
