import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GestureComponent } from './gesture/gesture.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'gesture', component: GestureComponent },
  { path: 'profile/:id', component: ProfileDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfilesRoutingModule { }
