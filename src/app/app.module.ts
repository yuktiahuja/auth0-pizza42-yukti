import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ProfileComponent } from './profile/profile.component';
import { HttpClientModule } from '@angular/common/http';
import { ExternalApiComponent } from './external-api/external-api.component';
import { BrowseMenuComponent } from './browse-menu/browse-menu.component';
import { HomeComponent } from './home/home.component';
import { OrderpizzaComponent } from './orderpizza/orderpizza.component';

@NgModule({
  declarations: [
    HomeComponent,
    AppComponent,
    NavBarComponent,
    ProfileComponent,
    ExternalApiComponent,
    BrowseMenuComponent,
    OrderpizzaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
