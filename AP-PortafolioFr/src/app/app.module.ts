import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HeaderComponent } from './componentes/header/header.component';
import { LoginComponent } from './componentes/login/login.component';
import { ApLogoComponent } from './componentes/ap-logo/ap-logo.component';
import { RedesComponent } from './componentes/redes/redes.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { AboutComponent } from './componentes/about/about.component';
import { ExperenciaComponent } from './componentes/experencia/experencia.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { HysComponent } from './componentes/hys/hys.component';
import { NgCircleProgressModule } from 'ng-circle-progress';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    ApLogoComponent,
    RedesComponent,
    BannerComponent,
    AboutComponent,
    ExperenciaComponent,
    EducacionComponent,
    HysComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
