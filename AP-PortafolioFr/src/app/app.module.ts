import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HeaderComponent } from './componentes/header/header.component';
import { LoginComponent } from './componentes/login/login.component';
import { ApLogoComponent } from './componentes/ap-logo/ap-logo.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { AboutComponent } from './componentes/about/about.component';
import { ExperenciaComponent } from './componentes/experencia/experencia.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { HysComponent } from './componentes/hys/hys.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ProyectoComponent } from './componentes/proyecto/proyecto.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { FormsModule } from '@angular/forms';
import { interceptorProvider } from './servicio/interceptor-service';
import { NewExperienciaComponent } from './componentes/experencia/new-experiencia.component';
import { EditExperienciaComponent } from './componentes/experencia/edit-experiencia.component';
import { NeweducacionComponent } from './componentes/educacion/neweducacion.component';
import { EditEducacionComponent } from './componentes/educacion/edit-educacion.component';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    ApLogoComponent,
    BannerComponent,
    AboutComponent,
    ExperenciaComponent,
    EducacionComponent,
    HysComponent,
    ProyectoComponent,
    InicioComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    NeweducacionComponent,
    EditEducacionComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
    FormsModule

  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
