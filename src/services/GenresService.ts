import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root',
})

export class GenresService {
  constructor(private http: HttpClient) {}

  GetAllGenres(): Observable<any> {
    return this.http.get("http://localhost:8080/genres", { withCredentials: true }).pipe(
      map((response) => {
        return response;
      })
    );
  }

}
