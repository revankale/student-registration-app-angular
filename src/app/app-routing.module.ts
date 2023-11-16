import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { AllListComponent } from './all-list/all-list.component';

const routes: Routes = [
  {
    path: "resister",
    component: RegistrationComponent
  },
  {
    path: "list",
    component: AllListComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
