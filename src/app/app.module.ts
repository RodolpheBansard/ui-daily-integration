import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CultureBuiltMyBrandComponent } from './components/culture-built-my-brand/culture-built-my-brand.component';
import { NeoplantsCloneComponent } from './components/neoplants-clone/neoplants-clone.component';
import { ParallaxDirective } from './components/neoplants-clone/parallax.directive';
import { JamBugReportComponent } from './components/jam-bug-report/jam-bug-report.component';

@NgModule({
  declarations: [
    AppComponent,
    CultureBuiltMyBrandComponent,
    NeoplantsCloneComponent,
    ParallaxDirective,
    JamBugReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
