import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './pages/product/product.component';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {
    path: 'product',
    component: ProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
