import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DoctorService, Doctor } from '../../services/doctor.service';
import { CommonModule, Location } from '@angular/common';

@Component({
  selector: 'app-doctor-details',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './doctor-details.component.html',
  styleUrl: './doctor-details.component.css'
})
export class DoctorDetailsComponent implements OnInit {
  route = inject(ActivatedRoute);
  doctorService = inject(DoctorService);
  location = inject(Location);
  
  doctor: Doctor | undefined;

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.doctor = this.doctorService.getDoctorById(id);
    }
  }

  goBack() {
    this.location.back();
  }
}
