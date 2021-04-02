import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeResolver } from 'src/shared/Recipe.resolver';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';

const routes: Routes = [
  {
    path: '',
    component: RecipeListComponent,
    resolve: {
      recipes: RecipeResolver
    }
  },
  {
    path: 'details/:uuid',
    component: RecipeDetailsComponent,
    resolve: {
      details: RecipeResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
