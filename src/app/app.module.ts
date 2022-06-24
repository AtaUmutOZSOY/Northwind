import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ProductComponent } from './components/product/product.component';
import { CategoryComponent } from './components/category/category.component';
import { NaviComponent } from './components/navi/navi.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule } from '@angular/material/toolbar'
import {MatSidenavModule} from '@angular/material/sidenav'
import {MatButtonModule } from '@angular/material/button'
import {MatIconModule } from '@angular/material/icon'
import {MatDividerModule } from '@angular/material/divider';
import { ImageComponent } from './components/image/image.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { NorthwindinfoComponent } from './components/northwindinfo/northwindinfo.component';
import { ContactComponent } from './components/contact/contact.component';



@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CategoryComponent,
    NaviComponent,
    SidebarComponent,
    ImageComponent,
    HeaderComponent,
    LoginComponent,
    HomeComponent,
    NorthwindinfoComponent,
    ContactComponent,
    
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, 
    BrowserAnimationsModule, MatToolbarModule,
    MatSidenavModule, MatButtonModule,MatIconModule,MatDividerModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
