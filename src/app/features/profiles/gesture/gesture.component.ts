import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  Profile,
  ProfileService,
} from '../../../core/services/profile.service';

@Component({
  selector: 'app-gesture',
  templateUrl: './gesture.component.html',
  styleUrls: ['./gesture.component.css'],
  standalone: false,
  animations: [
    trigger('stackAnimation', [
      transition(':leave', [animate('500ms ease-in', style({ opacity: 0 }))]),
      transition('* => like', [
        animate(
          '500ms ease-in',
          style({ transform: 'translateX(100%)', opacity: 0 })
        ),
      ]),
      transition('* => dislike', [
        animate(
          '500ms ease-in',
          style({ transform: 'translateX(-100%)', opacity: 0 })
        ),
      ]),
    ]),
  ],
})
export class GestureComponent implements OnInit {
  profiles: Profile[] = [];
  constructor(
    private profileService: ProfileService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.loadProfiles();
  }

  loadProfiles(): void {
    this.profiles = this.profileService.getProfiles();
  }
  likedProfileId: number | null = null;
  dislikedProfileId: number | null = null;

  like(profileId: number) {
    this.likedProfileId = profileId;
    setTimeout(() => this.removeProfile(profileId), 500); // Remove after animation
    this.snackBar.open('Profile Liked', 'Close', { duration: 2000 });
  }

  dislike(profileId: number) {
    this.dislikedProfileId = profileId;
    setTimeout(() => this.removeProfile(profileId), 500);
    this.snackBar.open('Profile removed', 'Close', { duration: 2000 });
  }

  removeProfile(profileId: number) {
    this.profiles = this.profiles.filter((profile) => profile.id !== profileId);
  }

  getBackgroundColor(index: number): string {
    return index === 0 ? '#ffffff' : '#fff3e0';
  }
  
  goBack() {
    window.history.back(); 
  }
}
