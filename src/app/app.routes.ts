import {Routes} from '@angular/router';
import {LoginPageComponent} from "./login-page/login-page.component";
import {RegisterPageComponent} from "./register-page/register-page.component";
import {HomePageComponent} from "./home-page/home-page.component";
import {MyBooksPageComponent} from "./my-books-page/my-books-page.component";
import {BookPageComponent} from "./book-page/book-page.component";
import {NavbarComponent} from "./navbar/navbar.component";

export const routes: Routes = [
  {path: "", component: HomePageComponent},
  {path: "mybooks", component: MyBooksPageComponent},
  {path: "book/:id", component: BookPageComponent},
  {path: 'login', component: LoginPageComponent, title:"Sign in"},
  {path: 'register', component: RegisterPageComponent, title: "Register"}
];

