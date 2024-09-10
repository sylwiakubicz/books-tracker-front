import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root',
})

export class GenresService {
  constructor(private http: HttpClient) {}

  base_url : string = "https://pandary-api.up.railway.app"

  GetAllGenres(): Observable<any> {
    return this.http.get(`${this.base_url}/genres`, { withCredentials: true }).pipe(
      map((response) => {
        return response;
      })
    );
  }

}
