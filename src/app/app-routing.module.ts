import { NotFoundComponent } from './not-found/not-found.component';
import { UploadComponent } from './upload/upload.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'upload',
    component: UploadComponent
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dash-board/dash-board.module').then(m => m.DashBoardModule)
  },
  {
    path: '',
    redirectTo: 'upload',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
