import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root',
})

export class BooksService {
  constructor(private http: HttpClient) {}

  GetAllBooks(params : any): Observable<any> {

    let httpParams = new HttpParams();

    if (params.size) {
      httpParams = httpParams.set('size', params.size);
    }
    if (params.sort) {
      httpParams = httpParams.set('sort', params.sort);
    }
    if (params.page) {
      httpParams = httpParams.set('page', params.page);
    }
    if (params.title) {
      httpParams = httpParams.set('title', params.title);
    }
    if (params.author) {
      httpParams = httpParams.set('author', params.author);
    }
    if (params.genre) {
      httpParams = httpParams.set('genre', params.genre);
    }
    if (params.year) {
      httpParams = httpParams.set('year', params.year);
    }

    return this.http.get("http://localhost:8080/books/get", {
      params: httpParams,
      withCredentials: true
    }).pipe(
      map((response) => {
        return response;
      })
    );
  }

  GetBook(id : number): Observable<any> {
    return this.http.get(`http://localhost:8080/books/get/${id}`, { withCredentials: true }).pipe(
      map((response) => {
        return response;
      })
    );
  }

}
