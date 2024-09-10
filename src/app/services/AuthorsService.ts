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
  base_url : string = "https://pandary-api.up.railway.app"

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
    return this.http.get(`${this.base_url}/authors`, { params: httpParams,withCredentials: true}).pipe(
      map(response => {
        return response
      })
    )
  }

  GetAuthorById(id : number) : Observable<any> {
    return this.http.get(`${this.base_url}/authors/${id}`, {withCredentials: true}).pipe(
      map(response => {
        return response
      })
    )
  }

  AddAuthor(authorsName: string, authorsSurname: string) : Observable<any> {
    return this.http.post(
      `${this.base_url}/authors`,
      {
        authorsName: authorsName,
        authorsSurname: authorsSurname
      },
      {withCredentials: true}).pipe(
      map(response => {
        return response
      })
    )
  }

  UpdateAuthor(author : Author) : Observable<any> {
    return this.http.put(`${this.base_url}/authors`, author, {withCredentials: true}).pipe(
      map(response => {
        return response
      })
    )
  }

  DeleteAuthor(id: number) : Observable<any> {
    return this.http.delete(`${this.base_url}/authors/${id}`, {withCredentials: true})
  }
}
