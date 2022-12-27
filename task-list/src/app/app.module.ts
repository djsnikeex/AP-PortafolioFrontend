import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { BottomComponent } from './componentes/bottom/bottom.component';
import { TasksComponent } from './componentes/tasks/tasks.component';
import { TaskItemComponent } from './componentes/task-item/task-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { AddTaskComponent } from './componentes/add-task/add-task.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './componentes/about/about.component';
import { FooterComponent } from './componentes/footer/footer.component';

const appRoutes:Routes = [
  {path: '', component:TasksComponent},
  {path: 'about',component:AboutComponent}
  
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BottomComponent,
    TasksComponent,
    TaskItemComponent,
    AddTaskComponent,
    AboutComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes,{enableTracing:true} )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
