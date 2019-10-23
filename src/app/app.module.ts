import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PersonaFormComponent } from './persona/persona-form/persona-form.component';
import { PersonaIndexComponent } from './persona/persona-index/persona-index.component';
import { PersonaDependienteComponent } from './persona/persona-dependiente/persona-dependiente.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },


  { path: 'persona', component: PersonaIndexComponent },
  { path: 'personaform', component: PersonaFormComponent },
  { path: 'personaform/:id', component: PersonaFormComponent },
  { path: 'personadependiente/:id', component: PersonaDependienteComponent },
  

  { path: '**', component: PageNotFoundComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    PersonaFormComponent,
    PersonaIndexComponent,
    PersonaDependienteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
