import { Component, OnInit } from '@angular/core';
import {Product, ProductResolved} from "../product";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../product.service";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html'
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string= 'Product Detail';
  product: Product;
  errorMessage: string;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private productService: ProductService) { }

  ngOnInit(): void {
    //let id = +this.route.snapshot.paramMap.get('id');
    //this.getproduct(id);
    const resolvedData: ProductResolved = this.route.snapshot.data['resolvedData'];
    this.errorMessage = resolvedData.error;
    this.onProductRetrieved(resolvedData.product)

  }
  onBack() :void {
    this.router.navigate(['/products']);
}

  // private getproduct(id: number): void {
  //   this.productService.getProduct(id).subscribe(
  //     product => this.onProductRetrieved(product),
  //     error => this.errorMessage = error
  //   )
  // }

  private onProductRetrieved(product: Product): void {
    this.product = product;
    if(this.product) {
      this.pageTitle = `Product Detail: ${this.product.productName}`;
    } else {
      this.pageTitle = 'No product found';
    }
  }
}
