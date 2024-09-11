import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root',
})

export class GenresService {
  constructor(private http: HttpClient) {}

  base_url : string = "https://pandary-api.up.railway.app"

  GetGenreById(id : number) : Observable<any> {
    return this.http.get(`${this.base_url}/genres/${id}`, {withCredentials: true}).pipe(
      map((response) => {
        return response;
      })
    )
  }

  GetAllGenres(): Observable<any> {
    return this.http.get(`${this.base_url}/genres`, { withCredentials: true }).pipe(
      map((response) => {
        return response;
      })
    );
  }

  GetAllGenresPages(page: number, size: number, search: string): Observable<any> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());

    if (search) {
      params = params.set('search', search);
    }
    return this.http.get(`${this.base_url}/genres/pagable`, {params: params, withCredentials: true }).pipe(
      map((response) => {
        return response;
      })
    );
  }

  AddGenre(genre: string): Observable<any> {
    const body = { genres: genre };
    return this.http.post<any>(`${this.base_url}/genres/create`, body, {withCredentials: true }).pipe(
      map((response) => {
        return response;
      })
      );
    }

  UpdateGenre(id: number, genre: string): Observable<any> {
    const body = { genres: genre };
    return this.http.put<any>(`${this.base_url}/genres/${id}`, body, {withCredentials: true}).pipe(
      map((response) => {
        return response;
      })
    );
  }

  DeleteGenre(id: number): Observable<any> {
    return this.http.delete<any>(`${this.base_url}/genres/${id}`);
  }

}
