import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { BlogComponent } from './components/blog/blog.component';
import { DocProyectComponent } from './components/doc-proyect/doc-proyect.component';
import { GelleryComponent } from './components/gellery/gellery.component';
import { TeamComponent } from './components/team/team.component';

const routes: Routes = [
  {
    path:'core', children: [
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'blog',
        component: BlogComponent
      },
      {
        path: 'docpro',
        component: DocProyectComponent
      },
      {
        path: 'gallery',
        component: GelleryComponent
      },
      {
        path: 'team',
        component: TeamComponent
      },
      {
        path: '',
        redirectTo: 'core/team',
        pathMatch: 'full'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
