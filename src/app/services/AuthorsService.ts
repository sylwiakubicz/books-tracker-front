import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root',
})

export class AuthorsService {
  constructor(private http: HttpClient) {}

  GetAllAuthors(params :any) :Observable<any>{
    let httpParams = new HttpParams();

    if (params.size) {
      httpParams = httpParams.set('size', params.size);
    }
    if (params.page) {
      httpParams = httpParams.set('page', params.page);
    }
    if (params.search) {
      httpParams = httpParams.set('search', params.search);
    }
    return this.http.get("http://localhost:8080/authors", { params: httpParams,withCredentials: true}).pipe(
      map(response => {
        return response
      })
    )
  }
}
