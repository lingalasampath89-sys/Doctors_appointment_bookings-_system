import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AppointmentService, Appointment } from '../../services/appointment.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-confirmation',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './confirmation.component.html',
  styleUrl: './confirmation.component.css'
})
export class ConfirmationComponent implements OnInit {
  route = inject(ActivatedRoute);
  appointmentService = inject(AppointmentService);
  
  appointment: Appointment | undefined;

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('bookingId');
    if (id) {
      this.appointment = this.appointmentService.getAppointmentById(id);
    }
  }
}
