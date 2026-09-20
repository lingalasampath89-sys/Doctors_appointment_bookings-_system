import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AppointmentService } from '../../services/appointment.service';
import { AuthService } from '../../services/auth.service';
import { DoctorService, Doctor } from '../../services/doctor.service';
import { FormsModule } from '@angular/forms';
import { CommonModule, Location } from '@angular/common';

@Component({
  selector: 'app-booking-form',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './booking-form.component.html',
  styleUrl: './booking-form.component.css'
})
export class BookingFormComponent implements OnInit {
  route = inject(ActivatedRoute);
  router = inject(Router);
  appointmentService = inject(AppointmentService);
  authService = inject(AuthService);
  doctorService = inject(DoctorService);
  location = inject(Location);

  doctor: Doctor | undefined;
  availableSlots: string[] = [];

  currentStep = 1;
  totalSteps = 4;

  formData = {
    patientName: '',
    patientAge: null as number | null,
    patientGender: '',
    patientPhone: '',
    patientEmail: '',
    date: '',
    timeSlot: '',
    symptoms: '',
    insuranceProvider: '',
    memberId: ''
  };

  today = new Date().toISOString().split('T')[0];

  ngOnInit() {
    const user = this.authService.getUser();
    if (user) {
      this.formData.patientName = (user as any).name || '';
      this.formData.patientPhone = (user as any).phone || '';
      this.formData.patientEmail = (user as any).email || '';
    }

    const doctorId = this.route.snapshot.paramMap.get('doctorId');
    if (doctorId) {
      this.doctor = this.doctorService.getDoctorById(doctorId);
    }
  }

  onDateChange() {
    this.formData.timeSlot = '';
    if (this.doctor && this.formData.date) {
      this.availableSlots = this.doctorService.getAvailableSlots(this.doctor.id, this.formData.date);
    }
  }

  nextStep() {
    if (this.currentStep < this.totalSteps) {
      this.currentStep++;
    }
  }

  prevStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  isStep1Valid(): boolean {
    return !!(this.formData.date && this.formData.timeSlot);
  }

  isStep2Valid(): boolean {
    return !!(this.formData.patientName && this.formData.patientPhone && this.formData.patientAge && this.formData.patientGender);
  }

  onSubmit() {
    if (this.doctor) {
      // Block the slot
      this.doctorService.bookSlot(this.doctor.id, this.formData.date, this.formData.timeSlot);

      const app = this.appointmentService.bookAppointment({
        doctorId: this.doctor.id,
        doctorName: this.doctor.name,
        specialization: this.doctor.specialization,
        patientName: this.formData.patientName,
        patientAge: this.formData.patientAge!,
        patientGender: this.formData.patientGender,
        patientPhone: this.formData.patientPhone,
        date: this.formData.date,
        timeSlot: this.formData.timeSlot,
        symptoms: this.formData.symptoms,
        fee: this.doctor.fee
      });

      this.router.navigate(['/confirmation', app.id]);
    }
  }

  goBack() {
    this.location.back();
  }
}
