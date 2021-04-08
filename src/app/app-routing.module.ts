import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { HomeComponent } from './home/home.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { DefaultComponent } from './dashbord/default/default.component';
import { BoutonComponent } from './dashbord/bouton/bouton.component';
import { ColorsComponent } from './dashbord/colors/colors.component';
import { BorderComponent } from './dashbord/border/border.component';


const routes: Routes = [
  {path : "" , component : LoginComponent},
  {path : "register" , component : RegisterComponent},
  {
    path: 'dashbord',
    component: DashbordComponent,
    children: [
      {
        path: '',
        component: DefaultComponent,
        
      },
      {
        path: 'bouton',
        component: BoutonComponent,
        
      },
      {
        path: 'colors',
        component: ColorsComponent,
        
      },
      {
        path: 'border',
        component:BorderComponent
      }
    ]
  },
  {path : "buttons" , component : ButtonsComponent},
  //{path : "" , component : HomeComponent}
  
  
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
