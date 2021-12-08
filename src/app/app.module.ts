import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragulaModule } from 'ng2-dragula';
import { NgxLoginWithAmazonButtonModule } from 'ngx-login-with-amazon-button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryTagsComponent } from './components/category-tags/category-tags.component';
import { EmptyCardComponent } from './components/empty-card/empty-card.component';
import { PlanDashboardComponent } from './components/plan-dashboard/plan-dashboard.component';
import { PlanEditorComponent } from './components/plan-editor/plan-editor.component';
import { RecipeCardComponent } from './components/recipe-card/recipe-card.component';
import { RecipeModalComponent } from './components/recipe-modal/recipe-modal.component';
import { RecipeIngredientPipe } from './pipes/recipe-ingredients/recipe-ingredient.pipe';

const lwaId = 'amzn1.application-oa2-client.7b2fcaa8dce647a99cdc25328bc21518';

@NgModule({
  declarations: [
    AppComponent,
    CategoryTagsComponent,
    EmptyCardComponent,
    PlanDashboardComponent,
    PlanEditorComponent,
    RecipeCardComponent,
    RecipeModalComponent,
    RecipeIngredientPipe,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    DragulaModule.forRoot(),
    HttpClientModule,
    NgxLoginWithAmazonButtonModule.forRoot(lwaId),
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
