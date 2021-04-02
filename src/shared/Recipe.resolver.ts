import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { RecipeService } from "./Recipe.service";


@Injectable({ providedIn: 'root' })
export class RecipeResolver implements Resolve<any> {
    constructor(private recipeService: RecipeService) { }

    async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<any> {

        if (route.url.length) {
            return this.recipeService.getRecipeDetails(route.url[1].path)
        } else {
            await this.recipeService.getSpecial();
            return await this.recipeService.getAllRecipe();
        }
    }
}