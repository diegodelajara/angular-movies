
import { LoginComponent } from "../app/components/pages/login/login.component";
import { HomeComponent } from "../app/components/pages/home/home.component";
import { DetailsComponent } from "../app/components/pages/details/details.component";

export const myRoutes:Array<object> = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'details', component: DetailsComponent }
]