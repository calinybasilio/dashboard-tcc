import { Routes } from '@angular/router';

import { HomeComponent } from '../../home/home.component';
import { UserComponent } from '../../user/user.component';
import { TablesComponent } from '../../tables/tables.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';

import { DashboardGuard } from 'app/core/guards/dashboard.guard';
import { NotFoundComponent } from 'app/not-found/not-found.component';

export const AdminLayoutRoutes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'dashboard', },
    { path: 'dashboard', component: HomeComponent, canActivate: [DashboardGuard] },
    // { path: 'user', component: UserComponent },
    // { path: 'table', component: TablesComponent },
    // { path: 'typography', component: TypographyComponent },
    // { path: 'icons', component: IconsComponent },
    // { path: 'maps', component: MapsComponent },
    // { path: 'notifications', component: NotificationsComponent },
    // { path: 'upgrade', component: UpgradeComponent },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: '404',
    },
    { path: '404', component: NotFoundComponent },
];
