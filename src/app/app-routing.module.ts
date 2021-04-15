import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { myRoutes } from "../utils/routes";

const routes: Routes = myRoutes;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
