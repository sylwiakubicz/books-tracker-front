import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
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
}
