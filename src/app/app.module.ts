import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './departements/menu/menu.component';
import {HttpClientModule} from "@angular/common/http";
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
import { HomeFormationComponent } from './departements/formation/home-formation/home-formation.component';
import { HomeStagiaireComponent } from './departements/stagiaire/home-stagiaire/home-stagiaire.component';
import { AjouterFormationComponent } from './departements/formation/ajouter-formation/ajouter-formation.component';
import { AjouterParticipantComponent } from './departements/formation/ajouter-participant/ajouter-participant.component';
import { AjouterFormateurComponent } from './departements/formation/ajouter-formateur/ajouter-formateur.component';
import { GererAbsenceParticipantComponent } from './departements/formation/gerer-absence-participant/gerer-absence-participant.component';
import { ConsulterFormationsComponent } from './departements/formation/consulter-formations/consulter-formations.component';
import { ConsulterParticipantsComponent } from './departements/formation/consulter-participants/consulter-participants.component';
import { ConsulterFormateursComponent } from './departements/formation/consulter-formateurs/consulter-formateurs.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
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
    ListerAbsenceComponent,
    HomeFormationComponent,
    HomeStagiaireComponent,
    AjouterFormationComponent,
    AjouterParticipantComponent,
    AjouterFormateurComponent,
    GererAbsenceParticipantComponent,
    ConsulterFormationsComponent,
    ConsulterParticipantsComponent,
    ConsulterFormateursComponent
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
