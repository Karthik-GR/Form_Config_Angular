import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfigComponent } from './components/config/config.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'configure', component: ConfigComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/register', pathMatch: 'full' }

  // {path:'header', component: HeaderComponent, children: [
  //   {path:'', component: RegisterComponent},
  //   {path:'config', component: ConfigComponent},
  //   {path:'register', component: RegisterComponent} ]},
  //   {path:'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
