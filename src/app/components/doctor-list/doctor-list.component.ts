import { Component, inject, OnInit } from '@angular/core';
import { DoctorService, Doctor } from '../../services/doctor.service';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-doctor-list',
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: './doctor-list.component.html',
  styleUrl: './doctor-list.component.css'
})
export class DoctorListComponent implements OnInit {
  doctorService = inject(DoctorService);
  
  doctors: Doctor[] = [];
  filteredDoctors: Doctor[] = [];
  specializations: string[] = [];
  locations: string[] = [];
  
  searchTerm = '';
  selectedSpecialization = 'All';
  selectedLocation = 'All';
  selectedFeeRange = 'All';

  ngOnInit() {
    this.doctors = this.doctorService.getDoctors();
    this.filteredDoctors = [...this.doctors];
    this.specializations = ['All', ...this.doctorService.getSpecializations()];
    this.locations = this.doctorService.getLocations();
  }

  filterDoctors() {
    this.filteredDoctors = this.doctors.filter(doc => {
      const matchesSearch = doc.name.toLowerCase().includes(this.searchTerm.toLowerCase())
        || doc.specialization.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchesSpec = this.selectedSpecialization === 'All' || doc.specialization === this.selectedSpecialization;
      const matchesLocation = this.selectedLocation === 'All' || doc.location === this.selectedLocation;
      const matchesFee = this.checkFeeRange(doc.fee);
      return matchesSearch && matchesSpec && matchesLocation && matchesFee;
    });
  }

  checkFeeRange(fee: number): boolean {
    switch (this.selectedFeeRange) {
      case '0-500': return fee <= 500;
      case '500-1000': return fee > 500 && fee <= 1000;
      case '1000+': return fee > 1000;
      default: return true;
    }
  }
}
