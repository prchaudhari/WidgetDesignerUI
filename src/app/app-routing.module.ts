import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { WidgetComponent } from './components/widget/widget.component';
import { AddWidgetComponent } from './components/add-widget/add-widget.component';

const routes: Routes = [
  {
    path: '',
    component: WidgetComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'widget',
    component: WidgetComponent
  },
  {
    path: 'products/add',
    component: AddProductComponent
  },
  {
    path: 'widget/add',
    component: AddWidgetComponent
  },
  {
    path: 'products/edit/:id',
    component: EditProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
