import { Routes } from '@angular/router';
import { User } from './pages/user/user';
import { DataBinding } from './pages/data-binding/data-binding';
import { Controlflow } from './pages/controlflow/controlflow';
import { DynamicCssClass } from './pages/dynamic-css-class/dynamic-css-class';
import { Emplyoee } from './pages/emplyoee/emplyoee';
export const routes: Routes = [
    
    {
        path: 'user-page',
        component: User
    },
    {
        path:'data-binding-page',
        component: DataBinding
    },
    {
        path:'control-flow-page',
        component: Controlflow
    },
    {
        path:'dynamic-css',
        component: DynamicCssClass
    },
    {
        path:'employee-page',
        component: Emplyoee
    }


];
