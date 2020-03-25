import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './auth.guard';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './interceptor.service';
import { ExternalApiComponent } from './external-api/external-api.component';
import { OrderpizzaComponent } from './orderpizza/orderpizza.component';
import { HomeComponent } from './home/home.component';
import { BrowseMenuComponent } from './browse-menu/browse-menu.component';

const routes: Routes = [

    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
    { path: 'orderpizza', component: OrderpizzaComponent, canActivate: [AuthGuard] },
    { path: 'external-api', component: ExternalApiComponent, canActivate: [AuthGuard] },
    { path: 'browse-menu', component: BrowseMenuComponent, canActivate: [AuthGuard] }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    }
  ]
})

export class AppRoutingModule { }
