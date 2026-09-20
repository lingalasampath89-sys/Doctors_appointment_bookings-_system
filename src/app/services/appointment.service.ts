import { Injectable } from '@angular/core';

export interface Appointment {
  id: string;
  doctorId: string;
  doctorName: string;
  specialization: string;
  patientName: string;
  patientAge: number;
  patientGender: string;
  patientPhone: string;
  date: string;
  timeSlot: string;
  symptoms: string;
  fee: number;
  status: 'Upcoming' | 'Completed' | 'Cancelled';
  bookedAt: string;
}

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  private appointments: Appointment[] = [];

  constructor() {
    const saved = localStorage.getItem('appointments');
    if (saved) {
      this.appointments = JSON.parse(saved);
    }
  }

  getAppointments() {
    return this.appointments;
  }

  getUpcoming() {
    const today = new Date().toISOString().split('T')[0];
    return this.appointments.filter(a => a.status === 'Upcoming' && a.date >= today);
  }

  getPast() {
    const today = new Date().toISOString().split('T')[0];
    return this.appointments.filter(a => a.status === 'Completed' || a.status === 'Cancelled' || (a.status === 'Upcoming' && a.date < today));
  }

  bookAppointment(app: Omit<Appointment, 'id' | 'status' | 'bookedAt'>) {
    const newApp: Appointment = {
      ...app,
      id: 'BKG-' + Math.random().toString(36).substr(2, 9).toUpperCase(),
      status: 'Upcoming',
      bookedAt: new Date().toISOString()
    };
    this.appointments.unshift(newApp);
    this.save();
    return newApp;
  }

  cancelAppointment(id: string) {
    const app = this.appointments.find(a => a.id === id);
    if (app) {
      app.status = 'Cancelled';
      this.save();
    }
  }

  getAppointmentById(id: string) {
    return this.appointments.find(a => a.id === id);
  }

  private save() {
    localStorage.setItem('appointments', JSON.stringify(this.appointments));
  }
}
