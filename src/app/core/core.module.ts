import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './components/blog/blog.component';
import { AboutComponent } from './components/about/about.component';
import { GelleryComponent } from './components/gellery/gellery.component';
import { DocProyectComponent } from './components/doc-proyect/doc-proyect.component';
import { TeamComponent } from './components/team/team.component';
import { CoreRoutingModule } from './core-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { EditTeamComponent } from './modals/edit-team/edit-team.component';


@NgModule({
  declarations: [
    BlogComponent,
    AboutComponent,
    GelleryComponent,
    DocProyectComponent,
    TeamComponent,
    EditTeamComponent,
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MdbCheckboxModule,
    MdbModalModule,
    MdbDropdownModule
  ]
})
export class CoreModule { }
