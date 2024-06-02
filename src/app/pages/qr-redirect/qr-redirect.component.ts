import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qr-redirect',
  template: '',
  standalone: true
})
export class QrRedirectComponent implements OnInit {
  ngOnInit(): void {
    alert()
    window.location.href = 'https://linktr.ee/varnertrip';
  }
}
