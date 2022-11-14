import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RecipeService} from './recipes';                                                       }
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
    providers: [RecipeService ]
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
