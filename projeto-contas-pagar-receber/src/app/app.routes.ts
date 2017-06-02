import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AccountPageComponent } from './pages/account-page/account-page.component';
import { AddAccountPageComponent } from './pages/add-account-page/add-account-page.component';
import { EditAccountPageComponent } from './pages/edit-account-page/edit-account-page.component';

const appRoutes: Routes = [
    { path: '', component: LoginPageComponent },
    { path: 'account', component: AccountPageComponent },
    { path: 'account/add', component: AddAccountPageComponent },
    { path: 'account/edit/:id', component: EditAccountPageComponent }
    
];

export const RoutingProviders: any[] = [

];

export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);