import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoComponent } from './logo/logo.component';
import { ProfileComponent } from './profile/profile.component';
import { CalfoodComponent } from './calfood/calfood.component';
import { FoodInformationComponent } from './food-information/food-information.component';
import { ProgramInformationComponent } from './program-information/program-information.component';
import { CalInfoComponent } from './cal-info/cal-info.component';
import { OrderComponent } from './order/order.component';
import { RecommendFoodComponent } from './recommend-food/recommend-food.component';
import { ProductPageComponent } from './product-page/product-page.component';
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logo', component: LogoComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'calfood', component: CalfoodComponent},
  { path: 'foodInfo', component: FoodInformationComponent},
  { path: 'programInfo', component: ProgramInformationComponent},
  { path: 'oderItem', component: OrderComponent},
  { path: 'calInfo', component: CalInfoComponent},
  { path: 'recfood', component: RecommendFoodComponent},
  { path: 'product', component: ProductPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
