import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { OrdersComponent } from './order/orders/orders.component';
import { ProductsComponent } from './product/products/products.component';


const routes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  {path:'orders/create',component:OrdersComponent},
  {path:'home',component:HomeComponent},
  {path:'products',component:ProductsComponent},
  // {path:'admin-dashboard',component:AdminDashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
