import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjouterFormateurComponent } from './departements/formation/ajouter-formateur/ajouter-formateur.component';
import { AjouterFormationComponent } from './departements/formation/ajouter-formation/ajouter-formation.component';
import { AjouterParticipantComponent } from './departements/formation/ajouter-participant/ajouter-participant.component';
import { ConsulterFormateursComponent } from './departements/formation/consulter-formateurs/consulter-formateurs.component';
import { ConsulterFormationsComponent } from './departements/formation/consulter-formations/consulter-formations.component';
import { ConsulterParticipantsComponent } from './departements/formation/consulter-participants/consulter-participants.component';
import { GererAbsenceParticipantComponent } from './departements/formation/gerer-absence-participant/gerer-absence-participant.component';
import { HomeFormationComponent } from './departements/formation/home-formation/home-formation.component';
import { MenuComponent } from './departements/menu/menu.component';
import { AffecterEncadrantComponent } from './departements/stagiaire/affecter-encadrant/affecter-encadrant.component';
import { AffecterSujetComponent } from './departements/stagiaire/affecter-sujet/affecter-sujet.component';
import { AjouterEncadrantComponent } from './departements/stagiaire/ajouter-encadrant/ajouter-encadrant.component';
import { AjouterStagComponent } from './departements/stagiaire/ajouter-stag/ajouter-stag.component';
import { AjouterSujetComponent } from './departements/stagiaire/ajouter-sujet/ajouter-sujet.component';
import { BanqueIdeesComponent } from './departements/stagiaire/banque-idees/banque-idees.component';
import { ConsulterStagiaireComponent } from './departements/stagiaire/consulter-stagiaire/consulter-stagiaire.component';
import { GererAbsenceComponent } from './departements/stagiaire/gerer-absence/gerer-absence.component';
import { HomeStagiaireComponent } from './departements/stagiaire/home-stagiaire/home-stagiaire.component';
import { ListerAbsenceComponent } from './departements/stagiaire/lister-absence/lister-absence.component';
import { TypesSatgiaireComponent } from './departements/stagiaire/types-satgiaire/types-satgiaire.component';

const routes: Routes = [
  {path:"menu",component:MenuComponent},
  {path:"stagiaire",component:HomeStagiaireComponent},
  {path:"stagiaire/type-stagiaire/ajouter-stagiaire",component:AjouterStagComponent},
  {path:"stagiaire/type-stagiaire",component:TypesSatgiaireComponent},
  {path:"stagiaire/ajouter-sujet",component:AjouterSujetComponent},
  {path:"stagiaire/liste-stagiaires",component:ConsulterStagiaireComponent},
  {path:"stagiaire/banque-idees",component:BanqueIdeesComponent},
  {path:"stagiaire/affecter-sujet",component:AffecterSujetComponent},
  {path:"stagiaire/ajouter-encadrant",component:AjouterEncadrantComponent},
  {path:"stagiaire/affecter-encadrant",component:AffecterEncadrantComponent},
  {path:"stagiaire/gerer-absence",component:GererAbsenceComponent},
  {path:"stagiaire/absence-stagiaire",component:ListerAbsenceComponent},
  {path:"formation",component:HomeFormationComponent},
  {path:"formation/ajouter-formation",component:AjouterFormationComponent},
  {path:"formation/ajouter-participant",component:AjouterParticipantComponent},
  {path:"formation/ajouter-formateur",component:AjouterFormateurComponent},
  {path:"formation/gerer-absence",component:GererAbsenceParticipantComponent},
  {path:"formation/consulter-formations",component:ConsulterFormationsComponent},
  {path:"formation/consulter-participants",component:ConsulterParticipantsComponent},
  {path:"formation/consulter-formateurs",component:ConsulterFormateursComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
