import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {ProductsComponent} from './components/product/components/products/products.component';
import {ContactComponent} from './components/contact/components/contact.component';
import {DemoComponent} from './components/demo/components/demo.component';
import {PageNotFoundComponent} from './components/page-not-found/components/page-not-found.component';
import {ProductDetailComponent} from './components/product/components/product-detail/product-detail.component';
import {LayoutComponent} from './components/layout/layout.component';
import {AdminGuard} from './guard/admin.guard';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'products',
        loadChildren: () => import('./components/product/product.module').then(m => m.ProductModule),
        canActivate: [AdminGuard]
      },
      {
        path: 'contact',
        loadChildren: () => import('./components/contact/contact.module').then(m => m.ContactModule),
        canActivate: [AdminGuard]
      },
      {
        path: 'demo',
        loadChildren: () =>  import('./components/demo/demo.module').then(m => m.DemoModule),
        canActivate: [AdminGuard]
      },
      {
        path: 'cards',
        loadChildren: () => import('./components/cards/cards.module').then(m => m.CardsModule),
        canActivate: [AdminGuard]
      }
    ]
  },
  {
    path: '**',
    loadChildren: () => import('./components/page-not-found/page-not-found.module').then(m => m.PageNotFoundModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true, preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
