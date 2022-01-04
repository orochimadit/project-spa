import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppDashboardComponent } from './app-dashboard/app-dashboard.component';
import { DivisionsAddComponent } from './divisions-add/divisions-add.component';
import { DivisionsListComponent } from './divisions-list/divisions-list.component';
import { MachineLearningComponent } from './machine-learning/machine-learning.component';
import { UploadComponent } from './upload/upload.component';

const routes: Routes = [
  {path:"machine-learning",component:MachineLearningComponent},
  {path:"dashboard",component:AppDashboardComponent},
  {path:"divisions",component:DivisionsListComponent},
  {path:"divisions-add",component:DivisionsAddComponent},
  {path:"upload",component:UploadComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
