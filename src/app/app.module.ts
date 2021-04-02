import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipeService } from 'src/shared/Recipe.service';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [
    RecipeService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
