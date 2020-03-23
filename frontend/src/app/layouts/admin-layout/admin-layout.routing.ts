import { Routes } from '@angular/router';

import { HomeComponent } from '../../pages/home/home.component';
import { AboutMeComponent } from '../../pages/aboutme/aboutme.component';
import { ProjectsComponent } from '../../pages/projects/projects.component';
import { BlogComponent } from '../../pages/blog/blog.component';
import { VisitorsComponent } from '../../pages/visitors/visitors.component';
import { ContactComponent } from '../../pages/contact/contact.component';

// archive
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'home',      component: HomeComponent },
    { path: 'aboutme',      component: AboutMeComponent },
    { path: 'projects',      component: ProjectsComponent },
    { path: 'blog',      component: BlogComponent },
    { path: 'visitors',      component: VisitorsComponent },
    { path: 'contact',      component: ContactComponent },
    
    // archive
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'tables',         component: TablesComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent }
];
