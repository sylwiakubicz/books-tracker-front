import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { NgxPaginationModule } from 'ngx-pagination';
import {LoginPageComponent} from "./user-front/login-page/login-page.component";
import {NavbarComponent} from "./user-front/navbar/navbar.component";
import {FooterComponent} from "./user-front/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginPageComponent, FontAwesomeModule, NavbarComponent, FooterComponent, NgxPaginationModule],
  templateUrl: './app.component.html',
})
export class AppComponent {
}
