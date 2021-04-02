import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root',
})
export class RecipeService {
    private apiURL: string = environment.apiURL;
    private recipes: any;
    private specials: any;
    constructor(private http: HttpClient) { }

    public async getAllRecipe(): Promise<Object> {
        const serviceURL: string = this.apiURL + '/recipes';
        const recipes = await this.http.get(serviceURL).toPromise();
        this.recipes = recipes;
        return recipes;
    }

    public async getSpecial(): Promise<Object> {
        const serviceURL: string = this.apiURL + '/specials';
        const specials = await this.http.get(serviceURL).toPromise();
        this.specials = specials;
        return specials;
    }


    public getRecipeDetails(id: string): any {
        try {

            const recipe = this.recipes.find((x: { uuid: string }) => x.uuid === id);
            recipe.ingredients = recipe.ingredients.map((ingredient: any) => {
                return {
                    ...ingredient,
                    special: this.specials.find((special: { ingredientId: string }) => special.ingredientId === ingredient.uuid)
                }
            });
            return recipe;
        } catch {
            return null;
        }
    }


}