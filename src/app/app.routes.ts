import {Routes} from '@angular/router';
import {LoginPageComponent} from "./login-page/login-page.component";
import {RegisterPageComponent} from "./register-page/register-page.component";
import {HomePageComponent} from "./home-page/home-page.component";
import {MyBooksPageComponent} from "./my-books-page/my-books-page.component";

export const routes: Routes = [
  {
    path: "",
    "component": HomePageComponent,
    title: "BooksTracker",
    children: [
      {path: "mybooks", component: MyBooksPageComponent},
      {path: "boook/{id}", component: MyBooksPageComponent}
  ]},
  {path: 'login', component: LoginPageComponent, title:"Sign in"},
  {path: 'register', component: RegisterPageComponent, title: "Register"}
];

