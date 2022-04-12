import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CultureBuiltMyBrandComponent } from './components/culture-built-my-brand/culture-built-my-brand.component';

@NgModule({
  declarations: [
    AppComponent,
    CultureBuiltMyBrandComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
