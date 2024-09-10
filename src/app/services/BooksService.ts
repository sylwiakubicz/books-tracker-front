import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root',
})

export class BooksService {
  constructor(private http: HttpClient) {}
  base_url : string = "pandary-api.up.railway.app"

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
    if (params.search) {
      httpParams = httpParams.set('search', params.search);
    }
    if (params.genre) {
      httpParams = httpParams.set('genre', params.genre);
    }
    if (params.year) {
      httpParams = httpParams.set('year', params.year);
    }

    return this.http.get(`${this.base_url}/books/get`, {
      params: httpParams,
      withCredentials: true
    }).pipe(
      map((response) => {
        return response;
      })
    );
  }

  GetBook(id : number): Observable<any> {
    return this.http.get(`${this.base_url}/books/get/${id}`, { withCredentials: true }).pipe(
      map((response) => {
        return response;
      })
    );
  }

  GetRandomBooks() : Observable<any> {
    return this.http.get(`${this.base_url}/books/get/random`, {withCredentials: true}).pipe(
      map(response => {
        return response;
      })
    )
  }

  GetNewestBooks(genre : string) : Observable<any> {
    let httpParams = new HttpParams();
    if (genre){
      httpParams = httpParams.set('genre', genre);
    }
    return this.http.get(`${this.base_url}/books/get/newest`, {
      params: httpParams,
      withCredentials: true
    }).pipe(
      map(response => {
        return response;
      })
    )
  }

  DeleteBook(id : number) : Observable<any> {
    return this.http.delete(`${this.base_url}/books/${id}`, {withCredentials: true})
  }

  AddBook(
    title: string,
    description: string,
    pageNumber: number,
    publicationYear: number,
    ISBN: string,
    image: File | undefined,
    authorsJson: any[],
    genresJson: any[]
  ): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('pageNumber', pageNumber.toString());
    formData.append('publicationYear', publicationYear.toString());
    formData.append('ISBN', ISBN);
    if (image) {
      formData.append('image', image);
    }
    formData.append('authorsJson', JSON.stringify(authorsJson));
    formData.append('genresJson', JSON.stringify(genresJson));

    return this.http.post(`${this.base_url}/books`, formData, {
      withCredentials: true,
    });
  }

  UpdateBook(
    title: string,
    description: string,
    pageNumber: number,
    publicationYear: number,
    ISBN: string,
    image: File | undefined,
    authorsJson: any[],
    genresJson: any[],
    id : number
  ): Observable<any> {
    const formData: FormData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('pageNumber', pageNumber.toString());
    formData.append('publicationYear', publicationYear.toString());
    formData.append('ISBN', ISBN);
    if (image) {
      formData.append('image', image);
    }
    formData.append('authorsJson', JSON.stringify(authorsJson));
    formData.append('genresJson', JSON.stringify(genresJson));

    return this.http.put(`${this.base_url}/books/${id}`, formData, {
      withCredentials: true,
    });
  }

}
