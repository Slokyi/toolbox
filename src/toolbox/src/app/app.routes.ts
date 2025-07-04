import { Routes } from '@angular/router';
import {Dashboard} from './app/component/dashboard/dashboard';

export const routes: Routes = [
  { path: 'dashboard', component: Dashboard },
  { path: '', component: Dashboard },

];
