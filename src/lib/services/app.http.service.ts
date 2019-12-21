import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductRec } from './../../app/models/app.productrec.model';
@Injectable()
export class HttpService {
    url: string;
    // the HttpClient will be resolved by HttpClientModule
    // class
    constructor(private http: HttpClient) {
      this.url = 'https://apiapptrainingnewapp.azurewebsites.net/api/Products';
    }

    getData(): Observable<ProductRec[]>{
        let resp : Observable<ProductRec[]> = null;
        resp = this.http.get<ProductRec[]>(this.url);
        return resp;
    }
    postData(prd: ProductRec): Observable<ProductRec>{
      let resp: Observable<ProductRec> = null;
      // define header options
      const options = {
          headers: new HttpHeaders({
             'Content-Type' : 'application/json'
          })
      };
      resp = this.http.post<ProductRec>(this.url,prd,options);
      return resp;
    }
    putData(id:number, prd: ProductRec): Observable<ProductRec>{
      let resp: Observable<ProductRec> = null;
      // define header options
      const options = {
          headers: new HttpHeaders({
             'Content-Type' : 'application/json'
          })
      };
      resp = this.http.put<ProductRec>(`${this.url}/${id}`,prd,options);
      return resp;
    }
    deleteData(id:number): Observable<boolean>{
      let resp: Observable<boolean> = null;
      resp = this.http.delete<boolean>(`${this.url}/${id}`);
      return resp;
    }
}