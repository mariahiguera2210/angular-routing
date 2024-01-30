import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {path:'', redirectTo: 'home', pathMatch: 'full'},
  {path:'home', component:HomeComponent},
  {path: 'view/:id', component: ViewComponent},
  { path: 'AboutUs', loadChildren: () => import('./about-us/about-us.module').then(m => m.AboutUsModule) },
  { path: 'Contact', loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule) },
  {path:'**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
