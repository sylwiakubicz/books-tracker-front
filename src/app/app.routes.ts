import {Routes} from '@angular/router';
import {LoginPageComponent} from "./login-page/login-page.component";
import {RegisterPageComponent} from "./register-page/register-page.component";
import {HomePageComponent} from "./home-page/home-page.component";
import {MyBooksPageComponent} from "./my-books-page/my-books-page.component";
import {BookPageComponent} from "./book-page/book-page.component";
import {BooksPageComponent} from "./books-page/books-page.component";
import {PageNotfoundComponent} from "./page-notfound/page-notfound.component";
import {AdminPageComponent} from "./admin-page/admin-page.component";
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  {path: "", component: HomePageComponent},
  {
    path: "books",
    component: BooksPageComponent,
    canActivate: [authGuard],
    data: { role: 'ROLE_USER' }
  },
  {
    path: "mybooks",
    component: MyBooksPageComponent,
    canActivate: [authGuard],
    data: { role: 'ROLE_USER' }
  },
  {
    path: "book/:id",
    component: BookPageComponent,
    canActivate: [authGuard],
    data: { role: 'ROLE_USER' }
  },
  {
    path: 'login',
    component: LoginPageComponent,
    title:"Sign in",
    canActivate: [authGuard]
  },
  {
    path: 'register',
    component: RegisterPageComponent,
    title: "Register",
    canActivate: [authGuard]
  },
  {
    path: 'admin',
    component: AdminPageComponent,
    canActivate: [authGuard],
    data: { role: 'ROLE_ADMIN' }
  },
  {path: '**', component: PageNotfoundComponent}
];

