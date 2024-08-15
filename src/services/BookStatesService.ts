
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root',
})

export class BookStatesService {
  constructor(private http: HttpClient) {}

  CheckIfExistAndThenGet(book_id : number) :Observable<any> {
    return this.http.get(`http://localhost:8080/bookstate/exist/${book_id}`, { withCredentials: true }).pipe(
      map((response) => {
        return response;
      })
    );
  }

}




