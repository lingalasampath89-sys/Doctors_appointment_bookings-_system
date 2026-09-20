import { Component, inject, OnInit } from '@angular/core';
import { AppointmentService, Appointment } from '../../services/appointment.service';
import { RouterLink } from '@angular/router';
import { CommonModule, Location } from '@angular/common';

@Component({
  selector: 'app-my-appointments',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './my-appointments.component.html',
  styleUrl: './my-appointments.component.css'
})
export class MyAppointmentsComponent implements OnInit {
  appointmentService = inject(AppointmentService);
  location = inject(Location);
  
  upcoming: Appointment[] = [];
  past: Appointment[] = [];
  activeTab: 'upcoming' | 'past' = 'upcoming';

  get displayedAppointments(): Appointment[] {
    return this.activeTab === 'upcoming' ? this.upcoming : this.past;
  }

  ngOnInit() {
    this.loadAppointments();
  }

  loadAppointments() {
    this.upcoming = this.appointmentService.getUpcoming();
    this.past = this.appointmentService.getPast();
  }

  cancelAppointment(id: string) {
    if (confirm('Are you sure you want to cancel this appointment?')) {
      this.appointmentService.cancelAppointment(id);
      this.loadAppointments();
    }
  }

  setTab(tab: 'upcoming' | 'past') {
    this.activeTab = tab;
  }

  goBack() {
    this.location.back();
  }
}
