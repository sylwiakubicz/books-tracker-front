import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  base_url : string = "https://pandary-api.up.railway.app"

  Register(username: string, email: string, password: string): Observable<any> {
    return this.http.post(`${this.base_url}/api/auth/register`, { username, email, password }, { withCredentials: true }).pipe(
      map((response) => {
        return response;
      })
    );
  }

  Login(username: string, password: string): Observable<any> {
    return this.http.post(`${this.base_url}/api/auth/login`, { username, password }, { withCredentials: true }).pipe(
      map((response) => {
        return response;
      })
    );
  }

  Logout(): Observable<any> {
    return this.http.get(`${this.base_url}/api/auth/logout`,  { withCredentials: true }).pipe(
      map((response) => {
        return response;
      })
    );
  }

  GetUserRole() : Observable<String | null> {
    return this.http.get<{role: string}>(`${this.base_url}/api/auth/role`, {withCredentials: true}).pipe(
      map(response => response.role || null)
    )
  }

  GetAllUsers(params : any) : Observable<any> {
    let httpParams = new HttpParams();
    if (params.role) {
      httpParams = httpParams.set('role', params.role);
    }
    if (params.search) {
      httpParams = httpParams.set('search', params.search);
    }
    if (params.page) {
      httpParams = httpParams.set('page', params.page);
    }
    if (params.size) {
      httpParams = httpParams.set('size', params.size);
    }
    return this.http.get(`${this.base_url}/api/auth`, {params: httpParams, withCredentials: true}).pipe(
      map( response => {
        return response;
      })
    )
  }

  GetUser(id : number) : Observable<any> {
    return this.http.get(`${this.base_url}/api/auth/${id}`, {withCredentials: true}).pipe(
      map(res => {
        return res
      })
    )
  }

  GetNumberOfAll() : Observable<any> {
    return this.http.get(`${this.base_url}/api/auth/total`, {withCredentials: true}).pipe(
      map(response => {
        return response
      })
    )
  }

  GetNumberOfAdmin() : Observable<any> {
    return this.http.get(`${this.base_url}/api/auth/admins/count`, {withCredentials: true}).pipe(
      map(response => {
        return response
      })
    )
  }

  GetNumberOfUser() : Observable<any> {
    return this.http.get(`${this.base_url}/api/auth/users/count`, {withCredentials: true}).pipe(
      map(response => {
        return response
      })
    )
  }

  CreateUserByAdmin(username: string, email: string, password: string, role : string) : Observable<any> {
    return this.http.post(
      `${this.base_url}/api/auth/create`,
      {
        username: username,
        email: email,
        password: password,
        role: role
      },
      {withCredentials: true}).pipe(
      map(res => {
        return res
      })
    )
  }

  UpdateUser(id : number, username: string, email: string, password: string, role : string) : Observable<any> {
    return this.http.put(
      `${this.base_url}/api/auth/update/user/${id}`,
      {
      username: username,
      email: email,
      password: password,
      role: role
      },
      {withCredentials: true}).pipe(
      map(res => {
        return res
      })
    )
  }

  DeleteUser(id : number) : Observable<any> {
    return this.http.delete(`${this.base_url}/api/auth/${id}`, {withCredentials: true})
  }

}

