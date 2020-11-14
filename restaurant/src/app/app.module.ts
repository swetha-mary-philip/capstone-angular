import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {APP_BASE_HREF} from '@angular/common';
import {RouterModule} from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';



//import { AppComponent } from './app.component';
import { FrameworkComponent } from './framework/framework.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FieldErrorDisplayComponent } from './field-error-display/field-error-display.component';
import { FilterMenuComponent } from './filter-menu/filter-menu.component';

@NgModule({
  declarations: [
    //AppComponent,
    FrameworkComponent,
    HomeComponent,
    AboutComponent,
    MenuComponent,
    LoginComponent,
    RegisterComponent,
    FieldErrorDisplayComponent,
    FilterMenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: '', // the home page
        component : HomeComponent
        },
        {
          path: 'about', // the home page
          component : AboutComponent
          },
          {
            path: 'menu', // the menu page
            component : MenuComponent
            },
            {
              path: 'menu/:searchstring', // the menu page
              component : MenuComponent
              },
            {
              path: 'login', // login user
              component : LoginComponent,
            },
            {
              path: 'register', // register user
              component : RegisterComponent,
            }
    ])
  ],
  providers: [{provide:APP_BASE_HREF, useValue: '/'}],
  bootstrap: [FrameworkComponent]
})
export class AppModule { }
