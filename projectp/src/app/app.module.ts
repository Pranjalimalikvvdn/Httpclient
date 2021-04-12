import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { CompamyprofileComponent } from './compamyprofile/compamyprofile.component';
import { LoginComponent } from './login/login.component';
import { RegustrationComponent } from './regustration/regustration.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { LogoutComponent } from './logout/logout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommontextComponent } from './commontext/commontext.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {DataTablesModule} from 'angular-datatables';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    ContactusComponent,
    CompamyprofileComponent,
    LoginComponent,
    RegustrationComponent,
    MyprofileComponent,
    LogoutComponent,
    CommontextComponent
    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    DataTablesModule
  ],
  providers: [{provide: LocationStrategy, useClass:PathLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
