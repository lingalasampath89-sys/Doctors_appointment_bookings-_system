import { Injectable } from '@angular/core';

export interface WaitlistEntry {
  id: string;
  specialty: string;
  preferredDateRange: string;
  preferredTime: string;
  doctorPreference: string;
  status: 'Active' | 'Notified' | 'Fulfilled';
  createdAt: string;
}

@Injectable({
  providedIn: 'root'
})
export class WaitlistService {
  private waitlists: WaitlistEntry[] = [
    {
      id: 'WL-1234',
      specialty: 'Cardiology',
      preferredDateRange: 'Next 7 Days',
      preferredTime: 'After 4:00 PM',
      doctorPreference: 'Any Available',
      status: 'Active',
      createdAt: new Date().toISOString()
    }
  ];

  getWaitlists(): WaitlistEntry[] {
    return this.waitlists;
  }

  joinWaitlist(entry: Omit<WaitlistEntry, 'id' | 'status' | 'createdAt'>) {
    const newEntry: WaitlistEntry = {
      ...entry,
      id: 'WL-' + Math.floor(Math.random() * 10000),
      status: 'Active',
      createdAt: new Date().toISOString()
    };
    this.waitlists.push(newEntry);
  }

  leaveWaitlist(id: string) {
    this.waitlists = this.waitlists.filter(w => w.id !== id);
  }
}
