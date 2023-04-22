import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { ProductService } from 'src/app/core/services/product/product.service';
import { Product } from 'src/app/core/types/product/product.type';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  id: number = -1;
  product: Product | null = null;
  private unsubscribe = new Subject<void>();
  count: number = 0;
  

  constructor(private productService: ProductService, private actRoute: ActivatedRoute) {}

  ngOnDestroy(): void {
    console.log("destroy");
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  ngOnInit(): void {

    this.id = this.actRoute.snapshot.params['id'];

    this.productService.products$.pipe(takeUntil(this.unsubscribe)).subscribe((products: Product[] | null) => {
      const product = this.productService.getSingleProductById(this.id);
      if (product === null) {
        console.log("termékek lekérése");
        this.productService.getAllProducts();
      }
      else if (product === undefined) {
        alert("NINCS ILYEN TERMÉK ");
      }
      else {
        console.log("termék beállítás");
        this.product = product;
      }
    })

    
  }


}
