import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { MaterialsComponent } from './pages/materials/materials.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { OverviewComponent } from './pages/overview/overview.component';
import { SidebarComponent } from './pages/sidebar/sidebar.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { UsersComponent } from './pages/users/users.component';
import { Routes, RouterModule } from '@angular/router';
import { AdminGuardService } from '../services/admin-guard.service';
import { ExamsComponent } from './pages/exams/exams.component';
import { FilterPipe } from '../filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const routes: Routes = [
  {
    path: 'sign-in',
    component: SignInComponent,
    // outlet: 'app',
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AdminGuardService],
    children: [
      {
        path: 'exams',
        component: ExamsComponent,
      },
      {
        path: 'materials',
        component: MaterialsComponent,
      },
      {
        path: 'overview',
        component: OverviewComponent,
      },
      {
        path: 'users',
        component: UsersComponent,
      },
      {
        path: '',
        redirectTo: 'overview',
        pathMatch: 'full',
      },
      {
        path: '**',
        redirectTo: 'overview',
      },
    ],
  },
  {
    path: '',
    redirectTo: 'sign-in',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  declarations: [
    HomeComponent, // refactored
    ExamsComponent, //not done yet
    MaterialsComponent, //refactored
    NavbarComponent, // refactored
    OverviewComponent, // refactored
    SidebarComponent, // refactored
    UsersComponent, // refactored
    SignInComponent, //refactored
    FilterPipe, //refactored
  ],
  imports: [CommonModule,  RouterModule.forChild(routes),FormsModule, ReactiveFormsModule],
  exports: [
    HomeComponent,
    ExamsComponent,
    MaterialsComponent,
    NavbarComponent,
    OverviewComponent,
    SidebarComponent,
    UsersComponent,
    SignInComponent,
  ]
})
export class AdminModule {}
