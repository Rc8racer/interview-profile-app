import { Injectable } from '@angular/core';

export interface Profile {
  id: number;
  name: string;
  age: number;
  height: string;
  language: string;
  caste: string;
  occupation: string;
  education: string;
  locality: string;
  photos: string[];
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private storageKey = 'profiles';
  private defaultProfiles: Profile[] = [
    {
      id: 1,
      name: 'Priyanka',
      age: 27,
      height: "5'5",
      language: 'Tamil',
      caste: 'Nair',
      occupation: 'Doctor',
      education: 'MBBS',
      locality: 'Chennai, Tamil Nadu',
      photos: [
        'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg',
        'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
        'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg'
      ],
      description: 'Priyanka is a dedicated doctor with a passion for helping others.'
    },
    {
      id: 2,
      name: 'Arjun',
      age: 29,
      height: "5'9",
      language: 'Hindi',
      caste: 'Brahmin',
      occupation: 'Software Engineer',
      education: 'B.Tech',
      locality: 'Bangalore, Karnataka',
      photos: [
        'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg',
        'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg'
      ],
      description: 'Arjun is a tech enthusiast who loves solving problems.'
    },
    {
      id: 3,
      name: 'Meera',
      age: 26,
      height: "5'6",
      language: 'Malayalam',
      caste: 'Ezhava',
      occupation: 'Architect',
      education: 'M.Arch',
      locality: 'Kochi, Kerala',
      photos: [
        'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg',
        'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg'
      ],
      description: 'Meera designs beautiful and sustainable buildings.'
    },
    {
      id: 4,
      name: 'Ravi',
      age: 30,
      height: "5'10",
      language: 'Telugu',
      caste: 'Reddy',
      occupation: 'Entrepreneur',
      education: 'MBA',
      locality: 'Hyderabad, Telangana',
      photos: [
        'https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg',
        'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg'
      ],
      description: 'Ravi runs his own startup in the e-commerce space.'
    },
    {
      id: 5,
      name: 'Ananya',
      age: 25,
      height: "5'4",
      language: 'Bengali',
      caste: 'Kayastha',
      occupation: 'Journalist',
      education: 'Mass Communication',
      locality: 'Kolkata, West Bengal',
      photos: [
        'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
        'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg'
      ],
      description: 'Ananya is passionate about uncovering the truth and sharing stories.'
    },
    {
      id: 6,
      name: 'Karthik',
      age: 28,
      height: "5'8",
      language: 'Tamil',
      caste: 'Vellalar',
      occupation: 'Civil Engineer',
      education: 'BE Civil',
      locality: 'Coimbatore, Tamil Nadu',
      photos: [
        'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
        'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg'
      ],
      description: 'Karthik loves building the future with strong foundations.'
    },
    {
      id: 7,
      name: 'Divya',
      age: 24,
      height: "5'3",
      language: 'Kannada',
      caste: 'Lingayat',
      occupation: 'Fashion Designer',
      education: 'B.Des',
      locality: 'Mysore, Karnataka',
      photos: [
        'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
        'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg'
      ],
      description: 'Divya expresses creativity through colors and fabric.'
    },
    {
      id: 8,
      name: 'Rohit',
      age: 31,
      height: "6'0",
      language: 'Marathi',
      caste: 'Maratha',
      occupation: 'Bank Manager',
      education: 'MBA Finance',
      locality: 'Pune, Maharashtra',
      photos: [
        'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
        'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg'
      ],
      description: 'Rohit is a responsible banker focused on community growth.'
    },
    {
      id: 9,
      name: 'Sneha',
      age: 27,
      height: "5'5",
      language: 'Gujarati',
      caste: 'Patel',
      occupation: 'Chartered Accountant',
      education: 'CA',
      locality: 'Ahmedabad, Gujarat',
      photos: [
        'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
        'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg'
      ],
      description: 'Sneha is a numbers wizard who loves financial planning.'
    },
    {
      id: 10,
      name: 'Imran',
      age: 29,
      height: "5'9",
      language: 'Urdu',
      caste: 'Muslim',
      occupation: 'Photographer',
      education: 'Diploma in Photography',
      locality: 'Lucknow, Uttar Pradesh',
      photos: [
        'https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg',
        'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg'
      ],
      description: 'Imran captures life’s moments through his lens.'
    }
  ];  

  constructor() {
    this.initializeProfiles();
  }

  private initializeProfiles() {
    if (typeof localStorage !== 'undefined') {
      const storedProfiles = localStorage.getItem(this.storageKey);
      if (!storedProfiles) {
        localStorage.setItem(this.storageKey, JSON.stringify(this.defaultProfiles));
      }
    }
  }

  getProfiles(): Profile[] {
    if (typeof localStorage !== 'undefined') {
      const storedProfiles = localStorage.getItem(this.storageKey);
      return storedProfiles ? JSON.parse(storedProfiles) : [...this.defaultProfiles];
    }
    return [...this.defaultProfiles];
  }

  removeProfile(id: number): void {
    if (typeof localStorage !== 'undefined') {
      let profiles = this.getProfiles().filter(profile => profile.id !== id);
      localStorage.setItem(this.storageKey, JSON.stringify(profiles));
    }
  }
}
