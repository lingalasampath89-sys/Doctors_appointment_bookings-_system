import { Component, inject, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { RouterLink } from '@angular/router';
import { WaitlistService, WaitlistEntry } from '../../services/waitlist.service';

@Component({
  selector: 'app-waitlist',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './waitlist.component.html',
  styleUrl: './waitlist.component.css'
})
export class WaitlistComponent implements OnInit {
  location = inject(Location);
  waitlistService = inject(WaitlistService);

  waitlists: WaitlistEntry[] = [];

  ngOnInit() {
    this.loadWaitlists();
  }

  loadWaitlists() {
    this.waitlists = this.waitlistService.getWaitlists();
  }

  leaveWaitlist(id: string) {
    if (confirm('Are you sure you want to leave this waitlist?')) {
      this.waitlistService.leaveWaitlist(id);
      this.loadWaitlists();
    }
  }

  goBack() {
    this.location.back();
  }
}
