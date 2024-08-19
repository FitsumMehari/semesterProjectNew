import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { AdminModule } from './admin/admin.module';
import { FormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { MaterialService } from './services/material.service';
import { ResultService } from './services/result.service';
import { QuestionService } from './services/question.service';
import { AuthGuardService } from './services/auth-guard.service';
import { AdminGuardService } from './services/admin-guard.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, UserModule, AdminModule],
  providers: [provideHttpClient(), AuthService, MaterialService, ResultService, QuestionService, AuthGuardService, AdminGuardService],
  bootstrap: [AppComponent],
})
export class AppModule {}
