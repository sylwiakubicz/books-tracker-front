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
  {path: "", component: HomePageComponent, title: "Pandary"},
  {
    path: "books",
    component: BooksPageComponent,
    title: "Pandary - Books",
    canActivate: [authGuard],
    data: { role: 'ROLE_USER' }
  },
  {
    path: "mybooks",
    component: MyBooksPageComponent,
    title: "Pandary - My Books",
    canActivate: [authGuard],
    data: { role: 'ROLE_USER' }
  },
  {
    path: "book/:id",
    component: BookPageComponent,
    title: "Pandary - Book Details",
    canActivate: [authGuard],
    data: { role: 'ROLE_USER' }
  },
  {
    path: 'login',
    component: LoginPageComponent,
    title:"Pandary - Sign in",
    canActivate: [authGuard]
  },
  {
    path: 'register',
    component: RegisterPageComponent,
    title: "Pandary - Register",
    canActivate: [authGuard]
  },
  {
    path: 'admin/accounts',
    component: AdminAccountsPageComponent,
    title: "Pandary Admin - Manage Accounts",
    canActivate: [authGuard],
    data: { role: 'ROLE_ADMIN' }
  },
  {
    path: 'admin/library/books',
    component: AdminBooksPageComponent,
    title: "Pandary Admin - Manage Books",
    canActivate: [authGuard],
    data: { role: 'ROLE_ADMIN' }
  },
  {
    path: 'admin/library/authors',
    component: AdminAuthorsPageComponent,
    title: "Pandary Admin - Manage Authors",
    canActivate: [authGuard],
    data: { role: 'ROLE_ADMIN' }
  },
  {
    path: 'admin/library/books/new',
    component: AdminManageBookDataPageComponent,
    title: "Pandary Admin - Add New Book",
    canActivate: [authGuard],
    data: { role: 'ROLE_ADMIN' }
  },
  {
    path: 'admin/library/books/:id',
    component: AdminManageBookDataPageComponent,
    title: "Pandary Admin - Edit Book",
    canActivate: [authGuard],
    data: { role: 'ROLE_ADMIN' }
  },
  {
    path: 'admin/accounts/user/new',
    component: AdminManagaAccountsDataPageComponent,
    title: "Pandary Admin - Add New Account",
    canActivate: [authGuard],
    data: { role: 'ROLE_ADMIN' }
  },
  {
    path: 'admin/accounts/:id',
    component: AdminManagaAccountsDataPageComponent,
    title: "Pandary Admin - Edit Account",
    canActivate: [authGuard],
    data: { role: 'ROLE_ADMIN' }
  },
  {
    path: 'admin/library/authors/new',
    component: AdminManageAuthorsDataPageComponent,
    title: "Pandary Admin - Add New Author",
    canActivate: [authGuard],
    data: { role: 'ROLE_ADMIN' }
  },
  {
    path: 'admin/library/authors/:id',
    component: AdminManageAuthorsDataPageComponent,
    title: "Pandary Admin - Edit Author",
    canActivate: [authGuard],
    data: { role: 'ROLE_ADMIN' }
  },
  {path: '**', component: PageNotfoundComponent, title: "Pandary - Page Not Found"}
];
