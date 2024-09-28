import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { AdminModule } from './admin/admin.module';
import { FormsModule } from '@angular/forms';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { MaterialService } from './services/material.service';
import { ResultService } from './services/result.service';
import { QuestionService } from './services/question.service';
import { AuthGuardService } from './services/auth-guard.service';
import { AdminGuardService } from './services/admin-guard.service';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient ) {
  return new TranslateHttpLoader(http, 'i18n/', '.json')
}


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    AdminModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
    },
    defaultLanguage: 'en',
    }),
  ],
  providers: [
    provideHttpClient(),
    AuthService,
    MaterialService,
    ResultService,
    QuestionService,
    AuthGuardService,
    AdminGuardService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
