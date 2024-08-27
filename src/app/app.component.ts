import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {LoginPageComponent} from "./login-page/login-page.component";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {NavbarComponent} from "./navbar/navbar.component";
import {FooterComponent} from "./footer/footer.component";
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginPageComponent, FontAwesomeModule, NavbarComponent, FooterComponent, NgxPaginationModule],
  templateUrl: './app.component.html',
})
export class AppComponent {
}
