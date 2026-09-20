import { Injectable } from '@angular/core';

export interface Review {
  reviewer: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Doctor {
  id: string;
  name: string;
  specialization: string;
  experience: number;
  photoUrl: string;
  availableDays: string[];
  timings: string;
  qualification: string;
  location: string;
  fee: number;
  rating: number;
  totalReviews: number;
  about: string;
  slots: string[];
  bookedSlots: { [date: string]: string[] };
  reviews: Review[];
}

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  private doctors: Doctor[] = [
    {
      id: 'd1',
      name: 'Dr. Arjun Reddy',
      specialization: 'Cardiologist',
      experience: 15,
      photoUrl: 'https://ui-avatars.com/api/?name=Arjun+Reddy&background=0f766e&color=fff&size=256',
      availableDays: ['Monday', 'Wednesday', 'Friday'],
      timings: '10:00 AM - 01:00 PM',
      qualification: 'MBBS, MD (Cardiology), DM (AIIMS Delhi)',
      location: 'Hyderabad',
      fee: 800,
      rating: 4.8,
      totalReviews: 312,
      about: 'Dr. Arjun Reddy is a senior cardiologist with over 15 years of clinical experience specialising in interventional cardiology and heart failure management. He has performed over 5000 successful cardiac procedures.',
      slots: ['09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM'],
      bookedSlots: {},
      reviews: [
        { reviewer: 'Ravi Kumar', rating: 5, comment: 'Excellent doctor, very patient and thorough.', date: '2026-08-10' },
        { reviewer: 'Priya Sharma', rating: 5, comment: 'Diagnosed my issue quickly. Highly recommended!', date: '2026-07-22' }
      ]
    },
    {
      id: 'd2',
      name: 'Dr. Sneha Patel',
      specialization: 'Dentist',
      experience: 8,
      photoUrl: 'https://ui-avatars.com/api/?name=Sneha+Patel&background=0f766e&color=fff&size=256',
      availableDays: ['Tuesday', 'Thursday', 'Saturday'],
      timings: '04:00 PM - 08:00 PM',
      qualification: 'BDS, MDS (Conservative Dentistry)',
      location: 'Bangalore',
      fee: 500,
      rating: 4.6,
      totalReviews: 187,
      about: 'Dr. Sneha Patel is a specialist in cosmetic dentistry and orthodontics. She has helped hundreds of patients achieve their best smile using the latest dental techniques.',
      slots: ['04:00 PM', '04:30 PM', '05:00 PM', '05:30 PM', '06:00 PM', '06:30 PM', '07:00 PM', '07:30 PM'],
      bookedSlots: {},
      reviews: [
        { reviewer: 'Anjali Singh', rating: 5, comment: 'Pain-free treatment, very gentle.', date: '2026-09-01' },
        { reviewer: 'Kartik Rao', rating: 4, comment: 'Good clinic, professional staff.', date: '2026-08-15' }
      ]
    },
    {
      id: 'd3',
      name: 'Dr. Emily Johnson',
      specialization: 'General Physician',
      experience: 12,
      photoUrl: 'https://ui-avatars.com/api/?name=Emily+Johnson&background=0f766e&color=fff&size=256',
      availableDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      timings: '09:00 AM - 05:00 PM',
      qualification: 'MBBS, MRCP (UK)',
      location: 'Chennai',
      fee: 400,
      rating: 4.9,
      totalReviews: 528,
      about: 'Dr. Emily Johnson is a trusted general physician known for her compassionate care and accurate diagnoses. She is the go-to doctor for families seeking comprehensive health management.',
      slots: ['09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '02:00 PM', '03:00 PM', '04:00 PM'],
      bookedSlots: {},
      reviews: [
        { reviewer: 'Suresh Babu', rating: 5, comment: 'She is simply the best. Very caring.', date: '2026-09-10' }
      ]
    },
    {
      id: 'd4',
      name: 'Dr. Michael Brown',
      specialization: 'Neurologist',
      experience: 20,
      photoUrl: 'https://ui-avatars.com/api/?name=Michael+Brown&background=0f766e&color=fff&size=256',
      availableDays: ['Wednesday', 'Friday'],
      timings: '11:00 AM - 02:00 PM',
      qualification: 'MBBS, MD, DM (Neurology)',
      location: 'Mumbai',
      fee: 1200,
      rating: 4.7,
      totalReviews: 241,
      about: 'Dr. Michael Brown is one of the most sought-after neurologists in the country with 20 years of experience in treating epilepsy, stroke, and movement disorders.',
      slots: ['11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM', '01:00 PM', '01:30 PM'],
      bookedSlots: {},
      reviews: [
        { reviewer: 'Deepa Menon', rating: 5, comment: 'Incredibly knowledgeable and calm.', date: '2026-08-20' }
      ]
    },
    {
      id: 'd5',
      name: 'Dr. Linda Davis',
      specialization: 'Cardiologist',
      experience: 10,
      photoUrl: 'https://ui-avatars.com/api/?name=Linda+Davis&background=0f766e&color=fff&size=256',
      availableDays: ['Monday', 'Thursday'],
      timings: '02:00 PM - 06:00 PM',
      qualification: 'MBBS, MD (Cardiology)',
      location: 'Hyderabad',
      fee: 700,
      rating: 4.5,
      totalReviews: 163,
      about: 'Dr. Linda Davis specializes in preventive cardiology and echocardiography. She has a strong focus on lifestyle-based heart disease prevention.',
      slots: ['02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM', '05:00 PM'],
      bookedSlots: {},
      reviews: [
        { reviewer: 'Naveen Goud', rating: 4, comment: 'Very good experience. Clear explanations.', date: '2026-09-05' }
      ]
    },
    {
      id: 'd6',
      name: 'Dr. Kavitha Nair',
      specialization: 'Orthopedics',
      experience: 14,
      photoUrl: 'https://ui-avatars.com/api/?name=Kavitha+Nair&background=0f766e&color=fff&size=256',
      availableDays: ['Tuesday', 'Thursday', 'Saturday'],
      timings: '10:00 AM - 04:00 PM',
      qualification: 'MBBS, MS (Ortho), Fellowship in Joint Replacement',
      location: 'Bangalore',
      fee: 900,
      rating: 4.8,
      totalReviews: 295,
      about: 'Dr. Kavitha Nair is a leading orthopedic surgeon specialising in joint replacements and sports injuries. She has performed over 2000 successful surgeries.',
      slots: ['10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM', '02:00 PM', '02:30 PM', '03:00 PM'],
      bookedSlots: {},
      reviews: [
        { reviewer: 'Ramesh Iyer', rating: 5, comment: 'My knee replacement surgery was a huge success!', date: '2026-08-28' }
      ]
    }
  ];

  constructor() {}

  getDoctors(): Doctor[] {
    return this.doctors;
  }

  getDoctorById(id: string): Doctor | undefined {
    return this.doctors.find(d => d.id === id);
  }

  getSpecializations(): string[] {
    const specs = this.doctors.map(d => d.specialization);
    return [...new Set(specs)];
  }

  getLocations(): string[] {
    const locs = this.doctors.map(d => d.location);
    return [...new Set(locs)];
  }

  getAvailableSlots(doctorId: string, date: string): string[] {
    const doctor = this.getDoctorById(doctorId);
    if (!doctor) return [];
    const booked = doctor.bookedSlots[date] || [];
    return doctor.slots.filter(s => !booked.includes(s));
  }

  bookSlot(doctorId: string, date: string, slot: string): void {
    const doctor = this.getDoctorById(doctorId);
    if (!doctor) return;
    if (!doctor.bookedSlots[date]) doctor.bookedSlots[date] = [];
    if (!doctor.bookedSlots[date].includes(slot)) {
      doctor.bookedSlots[date].push(slot);
    }
  }
}
