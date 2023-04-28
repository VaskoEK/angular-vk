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


  productsByCategories: ProductsByCategories = {};
  categories: string[] = [];

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
        this.products = response.products;  // a products típusa: Product[]

        this.categories = this.products.map(product => product.category).filter((value, index, array) => {return array.indexOf(value)===index});  // 1x belerakunk minden kategóriát, előford.-uk szerinti sorrendben

        // for (let product of this.products) {

        //   if(!this.productsByCategories[product.category]) {
        //     this.productsByCategories[product.category] = [];
        //   }
        //   this.productsByCategories[product.category].push(product);  // feltöltjük kategóriák szerint a productsByCategories üres objectet
          
        // }
       
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
