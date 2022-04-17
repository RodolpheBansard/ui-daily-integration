import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CultureBuiltMyBrandComponent} from "./components/culture-built-my-brand/culture-built-my-brand.component";
import {NeoplantsCloneComponent} from "./components/neoplants-clone/neoplants-clone.component";
import {JamBugReportComponent} from "./components/jam-bug-report/jam-bug-report.component";

const routes: Routes = [
  {path:'culture-built-my-brand', component: CultureBuiltMyBrandComponent},
  {path:'neoplants', component: NeoplantsCloneComponent},
  {path:'jam-bug-report', component: JamBugReportComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
