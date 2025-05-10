import { Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { LoginComponent } from './login/login.component';
import { SettingsComponent } from './settings/settings.component';
import { DetailsComponent } from './details/details.component';

export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'content', component: ContentComponent },
    { path: 'settings', component: SettingsComponent },
    { path: 'details', component: DetailsComponent }
];
