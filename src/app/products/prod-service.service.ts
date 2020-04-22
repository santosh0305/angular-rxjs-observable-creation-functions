import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product';
import { tap, map } from 'rxjs/operators';

@Injectable()
export class ProdServiceService {
  
  url: string = 'api/products';

  constructor(private httpClient: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.url).pipe(
      tap(item => console.log(item))
    )
  }

}