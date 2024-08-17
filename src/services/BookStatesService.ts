
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root',
})

export class BookStatesService {
  constructor(private http: HttpClient) {}

  bookStateData : BookStateData | undefined

  CheckIfExistAndThenGet(book_id : number) :Observable<any> {
    return this.http.get(`http://localhost:8080/bookstate/exist/${book_id}`, { withCredentials: true }).pipe(
      map((response) => {
        return response;
      })
    );
  }

  AddBookToStatus(book_id : number, status : string, rate :number, currentPage : number, startDate : Date, endDate : Date  ) : Observable<any> {
    this.bookStateData = {
      status : status,
      currentPage : currentPage,
      rate : rate,
      startDate : new Date(startDate).toJSON(),
      endDate : new Date(endDate).toJSON()
    }

    return this.http.post(`http://localhost:8080/bookstate/create/${book_id}`, this.bookStateData, { withCredentials: true }).pipe(
      map((response) => {
        return response;
      })
    )
  };

}

export interface BookStateData {
  status : string,
  currentPage: number,
  rate : number,
  startDate : string,
  endDate : string
}




