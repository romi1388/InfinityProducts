import { Injectable } from '@angular/core';
import { Product} from './product';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, of, throwError} from "rxjs";
import {catchError, map, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productUrl = 'api/products';
  constructor(private  http: HttpClient) {
  }
  getProducts() : Observable<Product[]> {
    return this.http.get<Product[]>(this.productUrl).pipe(
      tap(data=> console.log('All: '+ JSON.stringify(data))),
      catchError(this.handleError)
    );
  }
  getProduct(id: number) : Observable<Product> {
    if(id === 0) {
      return of(this.initializeProduct());
    }
    const url =  `${this.productUrl}/${id}`;
    return this.http.get<Product>(url)
      .pipe(
        tap(data => console.log('getProduct: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  createProduct(product: Product): Observable<Product> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    product.id = null;
    return this.http.post<Product>(this.productUrl, product, { headers })
      .pipe(
        tap(data => console.log('createProduct: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  deleteProduct(id: number): Observable<{}> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.productUrl}/${id}`;
    return this.http.delete<Product>(url, { headers })
      .pipe(
        tap(data => console.log('deleteProduct: ' + id)),
        catchError(this.handleError)
      );
  }

  updateProduct(product: Product): Observable<Product> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.productUrl}/${product.id}`;
    return this.http.put<Product>(url, product, { headers })
      .pipe(
        tap(() => console.log('updateProduct: ' + product.id)),
        // Return the product on an update
        map(() => product),
        catchError(this.handleError)
      );
  }


  private handleError(err: HttpErrorResponse){
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if(err.error instanceof ErrorEvent){
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occured: ${err.error.message}` ;
    }else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server return code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage );
  }

  private initializeProduct(): any {
    // Return an initialized object
    return {
      productId: 0,
      productName: null,
      productCode: null,
      category: null,
      tags: [],
      releaseDate: null,
      price: null,
      description: null,
      starRating: null,
      imageUrl: null
    };
  }
}
