import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { Routing, RoutingProviders } from './app.routes';

import { AppComponent } from './app.component';
import { AccountPageComponent } from './pages/account-page/account-page.component';
import { AddAccountPageComponent } from './pages/add-account-page/add-account-page.component';
import { EditAccountPageComponent } from './pages/edit-account-page/edit-account-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    AccountPageComponent,
    AddAccountPageComponent,
    EditAccountPageComponent,
    LoginPageComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    Routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
