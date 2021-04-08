import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { HomeComponent } from './home/home.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { BoutonComponent } from './dashbord/bouton/bouton.component';
import { DefaultComponent } from './dashbord/default/default.component';
import { ColorsComponent } from './dashbord/colors/colors.component';
import { BorderComponent } from './dashbord/border/border.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashbordComponent,
    HomeComponent,
    ButtonsComponent,
    BoutonComponent,
    DefaultComponent,
    ColorsComponent,
    BorderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
