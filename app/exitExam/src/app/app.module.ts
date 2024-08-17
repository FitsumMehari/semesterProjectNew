import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { AdminModule } from './admin/admin.module';
import { FormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { AuthService } from './services/auth.service';
// import { FirstWordPipe } from './first-word.pipe';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, UserModule, AdminModule],
  providers: [provideHttpClient(), AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
