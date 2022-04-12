import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CultureBuiltMyBrandComponent} from "./components/culture-built-my-brand/culture-built-my-brand.component";

const routes: Routes = [
  {path:'culture-built-my-brand', component: CultureBuiltMyBrandComponent},
  {path:'**', redirectTo:'culture-built-my-brand'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
