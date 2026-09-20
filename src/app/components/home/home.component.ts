import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgFor, NgClass } from '@angular/common';
import { DoctorService, Doctor } from '../../services/doctor.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, NgFor, NgClass],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  topDoctors: Doctor[] = [];
  openFaq: number | null = null;

  constructor(private doctorService: DoctorService) {}

  ngOnInit(): void {
    // Pick top 3 by rating
    this.topDoctors = this.doctorService.getDoctors()
      .sort((a, b) => b.rating - a.rating)
      .slice(0, 3);
  }

  scrollSpecs(direction: number): void {
    const track = document.getElementById('specTrack');
    if (track) {
      track.scrollBy({ left: direction * 280, behavior: 'smooth' });
    }
  }

  toggleFaq(index: number): void {
    this.openFaq = this.openFaq === index ? null : index;
  }
}
