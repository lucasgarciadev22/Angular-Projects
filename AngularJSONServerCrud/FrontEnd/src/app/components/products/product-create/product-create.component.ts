import { Router } from "@angular/router";
import { ProductService } from "./../product.service";
import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { Product } from "../product.model";
@Component({
  selector: "app-product-create",
  templateUrl: "./product-create.component.html",
  styleUrls: ["./product-create.component.css"],
  encapsulation: ViewEncapsulation.None
})
export class ProductCreateComponent implements OnInit {
  product: Product = {
    name: "Test Product",
    price: 129.9,
  };

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {}

  createProduct(): void {
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage("New product created!");
      this.router.navigate(["/products"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/products"]);
  }
}
