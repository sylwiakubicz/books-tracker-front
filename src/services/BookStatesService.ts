
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

  AddBookToStatus(book_id: number, status: string, rate: number | null, currentPage: number | null, startDate: Date | null, endDate: Date | null) : Observable<any> {
    this.bookStateData = {
      status : status,
      currentPage : currentPage,
      rate : rate,
      startDate : startDate ? new Date(startDate).toJSON() : null,
      endDate : endDate ? new Date(endDate).toJSON() : null
    }

    return this.http.post(`http://localhost:8080/bookstate/create/${book_id}`, this.bookStateData, { withCredentials: true }).pipe(
      map((response) => {
        return response;
      })
    )
  };

  UpdateBookToStatus(book_id: number, status: string, rate: number | null, currentPage: number | null, startDate: Date | null, endDate: Date | null) : Observable<any> {
    this.bookStateData = {
      status : status,
      currentPage : currentPage,
      rate : rate,
      startDate : startDate ? new Date(startDate).toJSON() : null,
      endDate : endDate ? new Date(endDate).toJSON() : null
    }

    return this.http.put(`http://localhost:8080/bookstate/update/${book_id}`, this.bookStateData, { withCredentials: true }).pipe(
      map((response) => {
        return response;
      })
    )
  };

}

export interface BookStateData {
  status : string | undefined,
  currentPage: number | null,
  rate : number | null,
  startDate : string | null,
  endDate : string | null
}




