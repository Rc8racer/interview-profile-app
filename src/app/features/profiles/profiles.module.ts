import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilesRoutingModule } from './profiles-routing.module';
import { HomeComponent } from './home/home.component';
import { GestureComponent } from './gesture/gesture.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';

// Import HammerModule if you use HammerJS for gesture detection
import { HammerModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HomeComponent,
    GestureComponent,
    ProfileDetailsComponent
  ],
  imports: [
    CommonModule,
    ProfilesRoutingModule,
    MatSnackBarModule,
    HammerModule,
    RouterModule
  ],
  providers: [
  ]
})
export class ProfilesModule { }
