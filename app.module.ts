import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SolomidComponent } from './mainpage/solomid.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { App1Component } from './app1/app1.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserServiceService } from './service/user-service.service.service';
import { UserGetServiceComponent } from './user-get-service/user-get-service.component';
import { FindCurrentUserComponent } from './find-current-user/find-current-user.component';
import { HeaderTopComponent } from './header-top/header-top.component';
import { LogoutComponent } from './logout/logout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UploadPageComponent } from './upload-page/upload-page.component';
import { UploadServiceService } from './service/upload-service.service';
import { ProductRetrieveComponent } from './product-retrieve/product-retrieve.component';
import { ProductRetrieveService } from './service/product-retrieve.service';
import { MainPageComponent } from './main-page/main-page.component';
import { ProductFilterComponent } from './main-page/product-filter/product-filter.component';
import { ProductListComponent } from './main-page/product-list/product-list.component';
import { ProductCartComponent } from './main-page/product-cart/product-cart.component';
import { ProductItemsComponent } from './main-page/product-list/product-items/product-items.component';
import { CartItemsComponent } from './main-page/product-cart/cart-items/cart-items.component';
import { CartService } from './service/cart.service';
import { ViewDetailComponent } from './view-detail/view-detail.component';
import { UserCabComponent } from './user-cab/user-cab.component';
import { UserCabItemsComponent } from './user-cab/user-cab-items/user-cab-items.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MainPageMensComponent } from './main-page-mens/main-page-mens.component';
import { ProductListMensComponent } from './main-page-mens/product-list-mens/product-list-mens.component';
import { ProductCartMensComponent } from './main-page-mens/product-cart-mens/product-cart-mens.component';
import { ProductItemsMensComponent } from './main-page-mens/product-list-mens/product-items-mens/product-items-mens.component';
import { CartItemsMensComponent } from './main-page-mens/product-cart-mens/cart-items-mens/cart-items-mens.component';
import { MainPageWomensComponent } from './main-page-womens/main-page-womens.component';
import { ProductListWomensComponent } from './main-page-womens/product-list-womens/product-list-womens.component';
import { ProductCartWomensComponent } from './main-page-womens/product-cart-womens/product-cart-womens.component';
import { ProductItemsWomensComponent } from './main-page-womens/product-list-womens/product-items-womens/product-items-womens.component';
import { CartItemsWomensComponent } from './main-page-womens/product-cart-womens/cart-items-womens/cart-items-womens.component';
import { FooterComponent } from './footer/footer.component';
import { AccessComponent } from './access/access.component';
import { ProductListAccessComponent } from './access/product-list-access/product-list-access.component';
import { ProductCartAccessComponent } from './access/product-cart-access/product-cart-access.component';
import { ProductItemsAccessComponent } from './access/product-list-access/product-items-access/product-items-access.component';
import { CartItemsAccessComponent } from './access/product-cart-access/cart-items-access/cart-items-access.component'

const routes: Routes = [{path: '' , component: MainPageComponent}, {path: 'app1', component: App1Component},
{path: 'users', component: UserListComponent},
  {path: 'adduser', component: UserFormComponent},
{path: 'currentUser', component: FindCurrentUserComponent},
{path: 'logout', component: LogoutComponent},
{path: 'upload-page', component: UploadPageComponent},
{path: 'main-page', component: MainPageComponent},
{path: 'view-detail', component: ViewDetailComponent},
{path: 'user-cab', component: UserCabComponent},
{path: 'mens', component: MainPageMensComponent},
{path: 'womens', component: MainPageWomensComponent},
{path: 'accessories', component: AccessComponent}


];

@NgModule({
  declarations: [
    AppComponent,
    SolomidComponent,
    App1Component,
    UserListComponent,
    UserFormComponent,
      UserGetServiceComponent,
      FindCurrentUserComponent,
      HeaderTopComponent,
      LogoutComponent,
      UploadPageComponent,
      ProductRetrieveComponent,
      MainPageComponent,
      ProductFilterComponent,
      ProductListComponent,
      ProductCartComponent,
      ProductItemsComponent,
      CartItemsComponent,
      ViewDetailComponent,
      UserCabComponent,
      UserCabItemsComponent,
      MainPageMensComponent,
      ProductListMensComponent,
      ProductCartMensComponent,
      ProductItemsMensComponent,
      CartItemsMensComponent,
      MainPageWomensComponent,
      ProductListWomensComponent,
      ProductCartWomensComponent,
      ProductItemsWomensComponent,
      CartItemsWomensComponent,
      FooterComponent,
      AccessComponent,
      ProductListAccessComponent,
      ProductCartAccessComponent,
      ProductItemsAccessComponent,
      CartItemsAccessComponent,

   ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [UserServiceService, UserGetServiceComponent, FindCurrentUserComponent, UploadServiceService, ProductRetrieveService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
