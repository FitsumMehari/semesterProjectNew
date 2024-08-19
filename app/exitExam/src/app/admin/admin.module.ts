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
import { EditMaterialComponent } from './pages/edit-material/edit-material.component';
import { DeleteMaterialComponent } from './pages/delete-material/delete-material.component';
import { AddMaterialComponent } from './pages/add-material/add-material.component';
import { AddUserComponent } from './pages/add-user/add-user.component';
import { EditUserComponent } from './pages/edit-user/edit-user.component';
import { DeleteUserComponent } from './pages/delete-user/delete-user.component';
import { ResultsComponent } from './pages/results/results.component';
import { SingleExamComponent } from './pages/single-exam/single-exam.component';
import { DeleteExamComponent } from './pages/delete-exam/delete-exam.component';
import { DeleteQuestionComponent } from './pages/delete-question/delete-question.component';
import { EditQuestionComponent } from './pages/edit-question/edit-question.component';
import { AddQuestionComponent } from './pages/add-question/add-question.component';
import { AddExamComponent } from './pages/add-exam/add-exam.component';

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
        path: 'add-exam',
        component: AddExamComponent,
      },
      {
        path: 'edit-exam/:examId',
        component: SingleExamComponent,
      },
      {
        path: 'delete-exam/:examId',
        component: DeleteExamComponent,
      },
      {
        path: 'edit-question/:examId/:questionId',
        component: EditQuestionComponent,
      },
      {
        path: 'add-question/:examId',
        component: AddQuestionComponent,
      },
      {
        path: 'delete-question/:examId/:questionId',
        component: DeleteQuestionComponent,
      },
      {
        path: 'materials',
        component: MaterialsComponent,
      },
      {
        path: 'edit-material/:materialId',
        component: EditMaterialComponent,
      },
      {
        path: 'delete-material/:materialId',
        component: DeleteMaterialComponent,
      },
      {
        path: 'add-material',
        component: AddMaterialComponent,
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
        path: 'update-user/:userId',
        component: EditUserComponent,
      },
      {
        path: 'delete-user/:userId',
        component: DeleteUserComponent,
      },
      {
        path: 'add-user',
        component: AddUserComponent,
      },
      {
        path: 'results',
        component: ResultsComponent,
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
    FilterPipe,
    EditMaterialComponent,
    DeleteMaterialComponent,
    AddMaterialComponent,
    AddUserComponent,
    EditUserComponent,
    DeleteUserComponent,
    ResultsComponent,
    SingleExamComponent,
    DeleteExamComponent,
    DeleteQuestionComponent,
    EditQuestionComponent,
    AddQuestionComponent,
    AddExamComponent, //refactored
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    HomeComponent,
    ExamsComponent,
    MaterialsComponent,
    NavbarComponent,
    OverviewComponent,
    SidebarComponent,
    UsersComponent,
    SignInComponent,
    EditMaterialComponent,
    DeleteMaterialComponent,
    AddMaterialComponent,
    AddUserComponent,
    EditUserComponent,
    DeleteUserComponent,
    ResultsComponent,
    SingleExamComponent,
    DeleteExamComponent,
    DeleteQuestionComponent,
    EditQuestionComponent,
    AddQuestionComponent,
    AddExamComponent
  ],
})
export class AdminModule {}
