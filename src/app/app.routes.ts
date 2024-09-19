import { Routes } from '@angular/router';
import { MasterComponent } from './components/master/master.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { ClientComponent } from './components/client/client.component';
import { DesignationComponent } from './components/designation/designation.component';
import { ClientProjectComponent } from './components/client-project/client-project.component';
import { LoginComponent } from './components/login/login.component';
import { LayoutComponent } from './components/layout/layout.component';
import { authGuard } from './auth.guard';
import { ReactiveFormsModule } from '@angular/forms';
export const routes: Routes = [

    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '',
        component: LayoutComponent,
        canActivate: [authGuard],
        children: [
            {
                path: 'master',
                component: MasterComponent
            },
            {
                path: 'employee',
                component: EmployeeComponent
            },
            {
                path: 'client',
                component: ClientComponent,
            },
            {
                path: 'designation',
                component: DesignationComponent
            },
            {
                path: 'client-project',
                component: ClientProjectComponent
            }
        ]
    },

];
