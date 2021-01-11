import {ChangeDetectionStrategy, Component, OnInit} from "@angular/core";
import {Product} from "./product";
import {ProductService} from './product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class ProductsComponent implements OnInit {

  pageTitle: string = 'Product List';
  imageWidth:number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  errorMessage: string = '';

  _listFilter: string;
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value:string) {
    this._listFilter = value;
    this.filteredProducts = this._listFilter? this.performFilter(this.listFilter) : this.products;
  }
  filteredProducts: Product[];
  products: Product[];

  constructor(private productService : ProductService) {
  }
  ngOnInit(): void {
    this.productService.getProducts().
    subscribe({
      next:products => {
        this.products = products;
        this.filteredProducts = this.products;
      },
      error: err => this.errorMessage = err
    });
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }
  performFilter(filterBy: string): Product[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: Product) =>
      product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }
  onRatingClicked(message: string) : void {
    this.pageTitle = 'Product List: ' + message;
  }
}
