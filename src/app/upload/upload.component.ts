import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {
  completionPercent: number = 1;
  n: number = 10;
  eta: number = 10;
  showmessage: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.startCountdown();
  }

  startCountdown() {
    const interval = setInterval(() => {
      this.eta--;
      this.completionPercent = Math.abs(((this.eta / this.n) * 100) - 100);
      if (this.eta == 0) {
        clearInterval(interval);
        this.router.navigate(['dashboard']);
      }
    }, 1000);
  }

}
