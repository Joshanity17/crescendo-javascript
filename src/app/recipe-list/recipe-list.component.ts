import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent {

  public recipes: [] = [];
  public displayedColumns: string[]= ['position', 'title', 'prepTime', 'servings', 'postDate', 'action'];

  constructor(private route: ActivatedRoute, private router: Router) { 
    const routeData: any = route.data;
    this.recipes = routeData.value.recipes;
  }

  details(id: string): void {
    this.router.navigate(['details', id], { relativeTo: this.route });
  }

}
