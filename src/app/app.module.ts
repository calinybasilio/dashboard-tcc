import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, Provider } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing';
import { NavbarModule } from './shared/navbar/navbar.module';
import { FooterModule } from './shared/footer/footer.module';
import { SidebarModule } from './sidebar/sidebar.module';
import { ErroInputModule } from './shared/erro-input/erro-input.module';

import { AppComponent } from './app.component';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ApiInterceptor } from './core/interceptors/api.interceptor';
import { UserService } from './core/services/user.service';

import { LoaderInterceptor } from './core/interceptors/loader.interceptor';
import { LoaderModule } from './shared/loader/loader.module';

export const INIT_API_INTERCEPTOR: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: ApiInterceptor,
  multi: true,
  deps: [UserService],
};

export const INIT_LOADER_INTERCEPTOR_APPLICATION: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: LoaderInterceptor,
  multi: true
};

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    NavbarModule,
    FooterModule,
    SidebarModule,
    ErroInputModule,
    AppRoutingModule,
    LoaderModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent
  ],
  providers: [
    INIT_API_INTERCEPTOR,
    INIT_LOADER_INTERCEPTOR_APPLICATION
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
