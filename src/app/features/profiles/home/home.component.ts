import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  Profile,
  ProfileService,
} from '../../../core/services/profile.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: false,
})
export class HomeComponent implements OnInit {
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

  navigateToGesture(): void {
    this.router.navigate(['/gesture']);
  }

  openProfileDetails(id: number): void {
    // Navigate or open a modal, etc.
    this.router.navigate(['/profile', id]);
  }

  removeProfile(id: number): void {
    this.profileService.removeProfile(id);
    this.loadProfiles();
    this.snackBar.open('Profile removed', 'Close', { duration: 2000 });
  }

  onSwipe(direction: string, id: number): void {
    this.removeProfile(id);
  }

  onAccept(id: number) {
    this.snackBar.open('Profile accepted!', 'Close', { duration: 2000 });
  }

  checkImage(path: string, fallback: string): string {
    const img = new Image();
    img.src = path;
    img.onerror = () => img.src = fallback;
    return img.src;
  }
  
}
