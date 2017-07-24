;
import { ProductsPageComponent } from './pages/products-page/products-page.component'
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { LogoComponent } from './components/logo/logo.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { CartbarComponent } from './components/cartbar/cartbar.component';
import { BannerComponent } from './components/banner/banner.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { Error404PageComponent } from './pages/error-404-page/error-404-page.component';
import { RoutingModule } from './app.routes';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ProductsService } from './providers/products.service';
import { FfListComponent } from './components/ff-list/ff-list.component';
import { FfService } from './providers/ff.service';
import { TabsService } from './providers/tabs.service';
import { MenuService } from './providers/menu.service';
import { StorageService } from './providers/storage.service';
import { CartService } from './providers/cart.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    LogoComponent,
    SearchbarComponent,
    CartbarComponent,
    BannerComponent,
    ProductListComponent,
    ProductCardComponent,
    FooterComponent,
    HomePageComponent,
    ProductPageComponent,
    ProductsPageComponent,
    Error404PageComponent,
    AboutPageComponent,
    FfListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RoutingModule
  ],
  providers: [ProductsService,FfService, TabsService, MenuService, ProductsService, StorageService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
