import { Routes } from '@angular/router';
import { User } from './pages/user/user';
import { DataBinding } from './pages/data-binding/data-binding';
export const routes: Routes = [
    
    {
        path: 'user-page',
        component: User
    },
    {
        path:'data-binding-page',
        component: DataBinding
    }


];
