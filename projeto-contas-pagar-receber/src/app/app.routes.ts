import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountPageComponent } from './pages/account-page/account-page.component';
import { AddAccountPageComponent } from './pages/add-account-page/add-account-page.component';

const appRoutes: Routes = [
    { path: '', component: AccountPageComponent },
    { path: 'account/add', component: AddAccountPageComponent }
];

export const RoutingProviders: any[] = [

];

export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);