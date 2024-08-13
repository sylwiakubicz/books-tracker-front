import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  constructor(private http: HttpClient) {}

  Test(): Observable<any> {
    return this.http.get("http://localhost:8080/books/get", { withCredentials: true }).pipe(
      map((response) => {
        console.log("Response received:", response);
        return response;
      })
    );
  }

  GetBook(id : number): Observable<any> {
    return this.http.get(`http://localhost:8080/books/get/${id}`, { withCredentials: true }).pipe(
      map((response) => {
        console.log("Response received:", response);
        return response;
      })
    );
  }

}
