import { ProductService } from "./../../products/product.service";
import { Product } from "./../../products/product.model";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-product-read",
  templateUrl: "./product-read.component.html",
  styleUrls: ["./product-read.component.css"],
})
export class ProductReadComponent implements OnInit {
  //! ignore constructor
  products!: Product[];
  displayedColumns = ['id', 'name', 'price','actions']
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.read().subscribe((products) => {
      this.products = products;
      console.log(products);
    });
  }
}
