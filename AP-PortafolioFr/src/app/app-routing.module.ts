import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditEducacionComponent } from './componentes/educacion/edit-educacion.component';
import { NeweducacionComponent } from './componentes/educacion/neweducacion.component';
import { EditExperienciaComponent } from './componentes/experencia/edit-experiencia.component';
import { NewExperienciaComponent } from './componentes/experencia/new-experiencia.component';
import { EditSkillComponent } from './componentes/hys/edit-skill.component';
import { NewSkillComponent } from './componentes/hys/new-skill.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { LoginComponent } from './componentes/login/login.component';
import { Educacion } from './model/educacion';

const routes: Routes = [ 
{path:'', component: InicioComponent}, 
{path:'login', component: LoginComponent},
{path:'nuevaexp', component: NewExperienciaComponent},
{path:'editexp/:id', component: EditExperienciaComponent},
{path:'nuevaedu', component: NeweducacionComponent},
{path:'editedu/:id', component: EditEducacionComponent},
{path:'newskill', component: NewSkillComponent},
{path:'editskill/:id', component: EditSkillComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
