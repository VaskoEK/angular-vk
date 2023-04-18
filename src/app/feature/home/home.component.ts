import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/core/services/product/product.service';
import { Product, ProductResponse, ProductsByCategories } from 'src/app/core/types/product/product.type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  
  value = 'Clear me';
  value1 = '';
  value2 = '';
  value3 = '';

  checked = true;

  test: Date = new Date();

  loggedIn:boolean = true;

  loading: boolean = false;
  products: Product[] = [];
  errorMsg: string = '';


  productsByCategories: ProductsByCategories = {
    smartphones: [],
    laptops: [],
    fragrances: [],
    skincare: [],
    groceries: [],
    'home-decoration': []
  };

  
  keys: string[] = Object.keys(this.productsByCategories);
  values: Product[][] = Object.values(this.productsByCategories);

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    console.log('HOME INIT');

    this.init();
  }

  ngOnDestroy(): void {
    console.log('HOME DESTROY');
  }

  private init() {

    this.loading = true;
    
    this.productService.getAllProductsToComponent().subscribe({
      next: (response: ProductResponse) => {
        this.products = response.products;
        for (let product of this.products) {
          if (product.category === "smartphones") {
            this.productsByCategories.smartphones.push(product);
          }
          else if (product.category === "laptops") {
            this.productsByCategories.laptops.push(product);
          }
          else if (product.category === "fragrances") {
            this.productsByCategories.fragrances.push(product);
          }
          else if (product.category === "skincare") {
            this.productsByCategories.skincare.push(product);
          }
          else if (product.category === "groceries") {
            this.productsByCategories.groceries.push(product);
          }
          else {
            this.productsByCategories['home-decoration'].push(product);
          }
        }
        this.loading = false;
      },  // komp.-en belüli hibakez.: feliratkozásba belerakunk egy error ágat is:
      error: (err: HttpErrorResponse) => {
        console.log(err);
        this.loading = false;
        this.errorMsg = err.message;  // hiba típusát jel. meg
      }
    })
  }

  navigateToProduct(product: Product) {
    
    this.router.navigate(['product', product.id]);   // útvonal a tömbben
  }

}
