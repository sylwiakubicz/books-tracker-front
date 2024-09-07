import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {Author} from "../user-front/home-page/home-page.component";

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

  GetAuthorById(id : number) : Observable<any> {
    return this.http.get(`http://localhost:8080/authors/${id}`, {withCredentials: true}).pipe(
      map(response => {
        return response
      })
    )
  }

  AddAuthor(authorsName: string, authorsSurname: string) : Observable<any> {
    return this.http.post(
      "http://localhost:8080/authors",
      {
        name: authorsName,
        surname: authorsSurname
      },
      {withCredentials: true}).pipe(
      map(response => {
        return response
      })
    )
  }

  UpdateAuthor(author : Author) : Observable<any> {
    return this.http.put("http://localhost:8080/authors", author, {withCredentials: true}).pipe(
      map(response => {
        return response
      })
    )
  }
}
