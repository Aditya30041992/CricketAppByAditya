import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { NewmatchComponent } from './admin/newmatch/newmatch.component';
import { MatchComponent } from './match/match.component';
import { CommentryComponent } from './match/commentry/commentry.component';
import { ScorecardComponent } from './match/scorecard/scorecard.component';
import { defineComponent } from '@angular/core/src/render3';
import { DefinedteamsComponent } from './admin/definedteams/definedteams.component';
import { InningsComponent } from './admin/innings/innings.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  { path: '', redirectTo: 'scorecard', pathMatch: 'full' },
  { path: 'match', 
    component: MatchComponent,
    children:[
      { path:'scorecard',component:ScorecardComponent },
      { path:'commentry',component:CommentryComponent }
    ]
  },
  {
    path: 'admin',
    component:AdminComponent,
    children: [
      { path: 'newmatch', component: NewmatchComponent },
      { path: 'defineteams', component: DefinedteamsComponent },
      { path: 'innings', component: InningsComponent }
      
    ]
  },
  { path:'**',redirectTo:'header' }
  
];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  