import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './pages/product/product.component';
import { LoginComponent } from './auth/login/login.component';
import { UnitComponent } from './pages/unit/unit.component';
import { CreateComponent } from './pages/unit/create/create.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {
    path: 'product',
    component: ProductComponent
  },
  {
    path: 'unit',
    component: UnitComponent
  },
  {
    path: 'add',
    component: CreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
