import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router,
    private notification: NotificationService) { }

  ngOnInit(): void {
  }

  public logout(): void {
    this.authService.logout().subscribe(response => {
      this.notification.showMessege("Até logo!", "success");
      this.router.navigate(["/login"]);
    }
    )
  }
}
