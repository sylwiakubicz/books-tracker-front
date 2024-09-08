import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  Register(username: string, email: string, password: string): Observable<any> {
    return this.http.post("http://localhost:8080/api/auth/register", { username, email, password }, { withCredentials: true }).pipe(
      map((response) => {
        console.log("Response received:", response);
        return response;
      })
    );
  }

  Login(username: string, password: string): Observable<any> {
    console.log("logging...")
    return this.http.post("http://localhost:8080/api/auth/login", { username, password }, { withCredentials: true }).pipe(
      map((response) => {
        console.log("Response received:", response);
        return response;
      })
    );
  }

  Logout(): Observable<any> {
    console.log("logout...")
    return this.http.get("http://localhost:8080/api/auth/logout",  { withCredentials: true }).pipe(
      map((response) => {
        console.log("Response received:", response);
        return response;
      })
    );
  }

  GetUserRole() : Observable<String | null> {
    return this.http.get<{role: string}>("http://localhost:8080/api/auth/role", {withCredentials: true}).pipe(
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
    return this.http.get("http://localhost:8080/api/auth", {params: httpParams, withCredentials: true}).pipe(
      map( response => {
        return response;
      })
    )
  }

  GetUser(id : number) : Observable<any> {
    return this.http.get(`http://localhost:8080/api/auth/${id}`, {withCredentials: true}).pipe(
      map(res => {
        return res
      })
    )
  }

  GetNumberOfAll() : Observable<any> {
    return this.http.get("http://localhost:8080/api/auth/total", {withCredentials: true}).pipe(
      map(response => {
        return response
      })
    )
  }

  GetNumberOfAdmin() : Observable<any> {
    return this.http.get("http://localhost:8080/api/auth/admins/count", {withCredentials: true}).pipe(
      map(response => {
        return response
      })
    )
  }

  GetNumberOfUser() : Observable<any> {
    return this.http.get("http://localhost:8080/api/auth/users/count", {withCredentials: true}).pipe(
      map(response => {
        return response
      })
    )
  }

  CreateUserByAdmin(username: string, email: string, password: string, role : string) : Observable<any> {
    return this.http.post(
      "https://localhost:8080/api/auth/create",
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
      `https://localhost:8080/api/auth/update/user/${id}`,
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

}

