import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/AuthService";
import {ActivatedRoute, Router} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-admin-accounts-form',
  standalone: true,
  imports: [
    FormsModule,
    NgIf
  ],
  templateUrl: './admin-accounts-form.component.html',
  styles: ``
})
export class AdminAccountsFormComponent implements OnInit{

  id : number = 0
  username : string = ''
  email : string = ''
  password : string = ''
  role : string = 'ROLE_USER'

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

  AddUser() {
      this.authService.CreateUserByAdmin(this.username, this.email, this.password, this.role).subscribe({
          next: (response) => {
            this.router.navigate(["/admin/accounts"]);
          },
          error: (err) => {
            console.log(err)
          }
      })
  }

  UpdateUser() {
    this.authService.UpdateUser(this.id, this.username, this.email, this.password, this.role).subscribe({
      next: (response) => {
        this.router.navigate(["/admin/accounts"]);
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  save() {
    this.authService.GetUserRole().subscribe(role => {
      if (role === null) {
        this.router.navigate(['/login']);
      } else {
        if (this.id != 0) {
          this.UpdateUser()
        } else {
          this.AddUser()
        }
      }
    })
  }


}
