
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
      startDate: this.formatDateToCustomString(startDate),
      endDate: this.formatDateToCustomString(endDate)
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
      startDate: this.formatDateToCustomString(startDate),
      endDate: this.formatDateToCustomString(endDate)
    }

    return this.http.put(`http://localhost:8080/bookstate/update/${book_id}`, this.bookStateData, { withCredentials: true }).pipe(
      map((response) => {
        return response;
      })
    )
  };

  formatDateToCustomString = (date: Date | null): string | null => {
    if (!date) return null;

    const d = new Date(date);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0'); // Miesiące są zero-indexowane
    const day = String(d.getDate()).padStart(2, '0');
    const hours = String(d.getHours()).padStart(2, '0');
    const minutes = String(d.getMinutes()).padStart(2, '0');
    const seconds = String(d.getSeconds()).padStart(2, '0');

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  };

}

export interface BookStateData {
  status : string | undefined,
  currentPage: number | null,
  rate : number | null,
  startDate : string | null,
  endDate : string | null
}




