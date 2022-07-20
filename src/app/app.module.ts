import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './departements/menu/menu.component';
import {HttpClientModule} from "@angular/common/http";
import { HomeComponent } from './departements/stagiaire/home/home.component';
import { CurrentPositionComponent } from './departements/current-position/current-position.component';
import { AjouterStagComponent } from './departements/stagiaire/ajouter-stag/ajouter-stag.component';
import { TypesSatgiaireComponent } from './departements/stagiaire/types-satgiaire/types-satgiaire.component';
import { AjouterSujetComponent } from './departements/stagiaire/ajouter-sujet/ajouter-sujet.component';
import { ConsulterStagiaireComponent } from './departements/stagiaire/consulter-stagiaire/consulter-stagiaire.component';
import { BanqueIdeesComponent } from './departements/stagiaire/banque-idees/banque-idees.component';
import { AffecterSujetComponent } from './departements/stagiaire/affecter-sujet/affecter-sujet.component';
import { AjouterEncadrantComponent } from './departements/stagiaire/ajouter-encadrant/ajouter-encadrant.component';
import { AffecterEncadrantComponent } from './departements/stagiaire/affecter-encadrant/affecter-encadrant.component';
import { GererAbsenceComponent } from './departements/stagiaire/gerer-absence/gerer-absence.component';
import { ListerAbsenceComponent } from './departements/stagiaire/lister-absence/lister-absence.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    CurrentPositionComponent,
    AjouterStagComponent,
    TypesSatgiaireComponent,
    AjouterSujetComponent,
    ConsulterStagiaireComponent,
    BanqueIdeesComponent,
    AffecterSujetComponent,
    AjouterEncadrantComponent,
    AffecterEncadrantComponent,
    GererAbsenceComponent,
    ListerAbsenceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, //
    HttpClientModule,//
    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
