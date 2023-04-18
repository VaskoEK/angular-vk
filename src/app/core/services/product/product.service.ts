import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { Product, ProductResponse } from '../../types/product/product.type';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpService: HttpService) { }

  private products = new BehaviorSubject<Product[] | null>(null);
  products$ = this.products.asObservable();

  getAllProducts(): void {
    this.httpService.getAllProducts().subscribe((response: ProductResponse) => {
      this.products.next(response.products);
    });
  }

  getAllProductsToComponent(): Observable<ProductResponse> {
    return this.httpService.getAllProducts();
  }


  getSingleProductById(id: number): Product | null | undefined {
    if (this.products.value !== null) {
      return this.products.value.find((products) => products.id == id);
    }
    else {
      return this.products.value;
    }
  }

  getSingleProduct(id: number): Observable<Product> {
    return this.httpService.getSingleProduct(id);
  }

}
