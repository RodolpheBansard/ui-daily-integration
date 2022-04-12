import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CultureBuiltMyBrandComponent } from './components/culture-built-my-brand/culture-built-my-brand.component';
import { NeoplantsCloneComponent } from './components/neoplants-clone/neoplants-clone.component';

@NgModule({
  declarations: [
    AppComponent,
    CultureBuiltMyBrandComponent,
    NeoplantsCloneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
