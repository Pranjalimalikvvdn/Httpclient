import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CompamyprofileComponent } from './compamyprofile/compamyprofile.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { RegustrationComponent } from './regustration/regustration.component';
import { CommontextComponent } from './commontext/commontext.component';
const routes: Routes = [
  { path: 'aboutus', component: AboutusComponent },
  { path: 'compamyprofile', component: CompamyprofileComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'myprofile', component: MyprofileComponent },
  { path: 'regustration', component: RegustrationComponent },
  { path: 'commontext', component: CommontextComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
