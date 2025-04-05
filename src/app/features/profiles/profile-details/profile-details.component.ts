import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Profile, ProfileService } from '../../../core/services/profile.service';


@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.css'],
  standalone: false
})
export class ProfileDetailsComponent implements OnInit {
  profile: Profile | undefined;

  constructor(
    private route: ActivatedRoute,
    private profileService: ProfileService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.profile = this.profileService.getProfiles().find(p => p.id === id);
  }

  goBack(): void {
    this.router.navigate(['/']); 
  }
}
