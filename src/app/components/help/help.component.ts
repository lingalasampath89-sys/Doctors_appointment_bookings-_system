import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgClass, NgFor } from '@angular/common';

@Component({
  selector: 'app-help',
  standalone: true,
  imports: [RouterLink, NgClass, NgFor],
  templateUrl: './help.component.html',
  styleUrl: './help.component.css'
})
export class HelpComponent {
  openFaq: number | null = null;

  toggleFaq(i: number) {
    this.openFaq = this.openFaq === i ? null : i;
  }

  faqs = [
    { q: 'How do I book an appointment?', a: 'Go to "Find Care", select a doctor, choose a date and time slot, fill in your details and confirm. You will receive an instant booking ID.' },
    { q: 'Can I cancel or reschedule?', a: 'Yes. Go to "My Appointments", find your booking and click "Cancel". Rescheduling can be done by cancelling and booking a new slot.' },
    { q: 'Is my data secure?', a: 'Absolutely. We use industry-standard encryption. Your health information is never shared without your consent.' },
    { q: 'How do I join the waitlist?', a: 'On any doctor\'s profile, if all slots are full, you can click "Join Waitlist". You\'ll be notified when a slot opens up.' },
    { q: 'What payment methods are accepted?', a: 'Payments are collected directly at the clinic. We do not process payments online currently.' },
    { q: 'Are all doctors verified?', a: 'Yes. All doctors undergo MCI/NMC registration verification before listing on our platform.' },
  ];
}
