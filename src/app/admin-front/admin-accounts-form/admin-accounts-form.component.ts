import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/AuthService";
import {ActivatedRoute, Router} from "@angular/router";
import {Author} from "../../user-front/home-page/home-page.component";

@Component({
  selector: 'app-admin-accounts-form',
  standalone: true,
  imports: [],
  templateUrl: './admin-accounts-form.component.html',
  styles: ``
})
export class AdminAccountsFormComponent implements OnInit{

  id : number = 0
  username : string = ''
  email : string = ''
  password : string = ''
  role : string = ''

  constructor(private authService : AuthService, private router : Router,  private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');
      if (idParam) {
        this.id = +idParam;
        this.loadUserData();
      }
    });
  }

  loadUserData(): void {
    if (this.id != 0) {
      this.authService.GetUser(this.id).subscribe({
        next: (res) => {
          this.username = res.username
          this.email = res.email
          this.password = res.password
          this.role = res.role.role
        },
        error: (error) => {
          console.log(error);
        }
      });
    }
  }


}
