import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './pages/home/home.component';
import { NavBarComponent } from './pages/nav-bar/nav-bar.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { OtpVerificationComponent } from './pages/otp-verification/otp-verification.component';
import { CreateNewPasswordComponent } from './pages/create-new-password/create-new-password.component';
import { UpdateProfileComponent } from './pages/update-profile/update-profile.component';
import { MaterialsComponent } from './pages/materials/materials.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { ExamHomeComponent } from './pages/exam-home/exam-home.component';
import { QuestionComponent } from './pages/question/question.component';
import { ResultComponent } from './pages/result/result.component';
import { MessageComponent } from './pages/message/message.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FirstLetterPipe } from '../first-word.pipe';
import { AuthGuardService } from '../services/auth-guard.service';


const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'sign-in', component: SignInComponent },
      { path: 'sign-up', component: SignUpComponent },
      { path: 'about-us', component: AboutUsComponent },
      { path: 'contact-us', component: ContactUsComponent },
      { path: 'materials', component: MaterialsComponent, canActivate: [AuthGuardService] },
      { path: 'exam', component: ExamHomeComponent, canActivate: [AuthGuardService] },
      { path: 'question', component: QuestionComponent, canActivate: [AuthGuardService] },
      { path: 'result', component: ResultComponent, canActivate: [AuthGuardService] },
      { path: 'otp-verification', component: OtpVerificationComponent },
      { path: 'home', component: HomeComponent },
      { path: 'create-new-password', component: CreateNewPasswordComponent },
      { path: 'update-profile', component: UpdateProfileComponent, canActivate: [AuthGuardService] },
      { path: 'reset-password', component: ResetPasswordComponent },
      { path: '**', redirectTo: 'home', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  declarations: [
    UserComponent,
    HomeComponent,
    NavBarComponent,
    SignUpComponent,
    SignInComponent,
    ResetPasswordComponent,
    OtpVerificationComponent,
    CreateNewPasswordComponent,
    UpdateProfileComponent,
    MaterialsComponent,
    AboutUsComponent,
    ContactUsComponent,
    ExamHomeComponent,
    QuestionComponent,
    ResultComponent,
    MessageComponent,
    FirstLetterPipe
  ],
  imports: [CommonModule, RouterModule.forChild(routes), FormsModule, ReactiveFormsModule],
  exports: [
    UserComponent,
    HomeComponent,
    NavBarComponent,
    SignUpComponent,
    SignInComponent,
    ResetPasswordComponent,
    OtpVerificationComponent,
    CreateNewPasswordComponent,
    UpdateProfileComponent,
    MaterialsComponent,
    AboutUsComponent,
    ContactUsComponent,
    ExamHomeComponent,
    QuestionComponent,
    ResultComponent,
    MessageComponent,
  ],
})
export class UserModule {}
