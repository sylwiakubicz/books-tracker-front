import {Routes} from '@angular/router';
import {HomePageComponent} from "./user-front/home-page/home-page.component";
import {BooksPageComponent} from "./user-front/books-page/books-page.component";
import {authGuard} from "./guards/auth.guard";
import {MyBooksPageComponent} from "./user-front/my-books-page/my-books-page.component";
import {BookPageComponent} from "./user-front/book-page/book-page.component";
import {LoginPageComponent} from "./user-front/login-page/login-page.component";
import {RegisterPageComponent} from "./user-front/register-page/register-page.component";
import {AdminAccountsPageComponent} from "./admin-front/admin-accounts-page/admin-accounts-page.component";
import {AdminBooksPageComponent} from "./admin-front/admin-books-page/admin-books-page.component";
import {AdminAuthorsPageComponent} from "./admin-front/admin-authors-page/admin-authors-page.component";
import {
  AdminManageBookDataPageComponent
} from "./admin-front/admin-manage-book-data-page/admin-manage-book-data-page.component";
import {
  AdminManagaAccountsDataPageComponent
} from "./admin-front/admin-managa-accounts-data-page/admin-managa-accounts-data-page.component";
import {
  AdminManageAuthorsDataPageComponent
} from "./admin-front/admin-manage-authors-data-page/admin-manage-authors-data-page.component";
import {PageNotfoundComponent} from "./user-front/page-notfound/page-notfound.component";


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
  {
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
  {
    path: 'admin/library/authors/new',
    component: AdminManageAuthorsDataPageComponent,
    canActivate: [authGuard],
    data: { role: 'ROLE_ADMIN' }
  },
  {
    path: 'admin/library/authors/:id',
    component: AdminManageAuthorsDataPageComponent,
    canActivate: [authGuard],
    data: { role: 'ROLE_ADMIN' }
  },
  {path: '**', component: PageNotfoundComponent}
];

