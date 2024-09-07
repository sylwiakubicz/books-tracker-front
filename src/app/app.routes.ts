import {Routes} from '@angular/router';
import {LoginPageComponent} from "./login-page/login-page.component";
import {RegisterPageComponent} from "./register-page/register-page.component";
import {HomePageComponent} from "./home-page/home-page.component";
import {MyBooksPageComponent} from "./my-books-page/my-books-page.component";
import {BookPageComponent} from "./book-page/book-page.component";
import {BooksPageComponent} from "./books-page/books-page.component";
import {PageNotfoundComponent} from "./page-notfound/page-notfound.component";
import {AdminAccountsPageComponent} from "./admin-accounts-page/admin-accounts-page.component";
import { authGuard } from './guards/auth.guard';
import {AdminBooksPageComponent} from "./admin-books-page/admin-books-page.component";
import {AdminAuthorsPageComponent} from "./admin-authors-page/admin-authors-page.component";
import {AdminManageBookDataPageComponent} from "./admin-manage-book-data-page/admin-manage-book-data-page.component";
import {
  AdminManagaAccountsDataPageComponent
} from "./admin-managa-accounts-data-page/admin-managa-accounts-data-page.component";

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
    path: 'admin/accounts',
    component: AdminAccountsPageComponent,
    canActivate: [authGuard],
    data: { role: 'ROLE_ADMIN' }
  },
  {
    path: 'admin/library/books',
    component: AdminBooksPageComponent,
    canActivate: [authGuard],
    data: { role: 'ROLE_ADMIN' }
  },
  {
    path: 'admin/library/authors',
    component: AdminAuthorsPageComponent,
    canActivate: [authGuard],
    data: { role: 'ROLE_ADMIN' }
  },
  {
    path: 'admin/library/books/new',
    component: AdminManageBookDataPageComponent,
    canActivate: [authGuard],
    data: { role: 'ROLE_ADMIN' }
  },
  {git
    path: 'admin/library/books/:id',
    component: AdminManageBookDataPageComponent,
    canActivate: [authGuard],
    data: { role: 'ROLE_ADMIN' }
  },
  {
    path: 'admin/accounts/user/new',
    component: AdminManagaAccountsDataPageComponent,
    canActivate: [authGuard],
    data: { role: 'ROLE_ADMIN' }
  },
  {
    path: 'admin/accounts/:id',
    component: AdminManagaAccountsDataPageComponent,
    canActivate: [authGuard],
    data: { role: 'ROLE_ADMIN' }
  },
  {path: '**', component: PageNotfoundComponent}
];

