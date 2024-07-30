import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  Register(username: string, email: string, password: string): Observable<any> {
    return this.http.post("http://localhost:8080/api/auth/register", { username, email, password }).pipe(
      map((response) => {
        console.log("Response received:", response);
        return response;
      })
    );
  }

}
