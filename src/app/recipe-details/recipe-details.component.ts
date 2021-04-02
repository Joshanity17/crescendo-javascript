import { animate, group, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss'],
})
export class RecipeDetailsComponent {
  public recipe: any;
  public ingredientsColumn: string[] = ['name', 'amount', 'measurement'];
  public expandedIngredient: any;
  public isSpecialDetailRow = (i: number, row: Object) => row.hasOwnProperty('isSpecialRow');

  constructor(route: ActivatedRoute, router: Router) {
    const routeData: any = route.data;
    if (!routeData.value.details) router.navigate(['']);
    this.recipe = routeData.value.details;

    this.recipe.ingredients = this.recipe.ingredients.reduce((prev: any, curr: any) => {
      prev.push(curr, { isSpecialRow: !!curr.special, special: curr.special });
      return prev;
    }, []);

  }

  isActiveSpecialRow(row: any): boolean {
    return row.isSpecialRow && row.special == this.expandedIngredient?.special
  }

}
