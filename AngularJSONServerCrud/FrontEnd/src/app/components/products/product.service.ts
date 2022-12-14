import { Product } from "./product.model";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { catchError, EMPTY, map, Observable } from "rxjs";
@Injectable({
  providedIn: "root",
})
export class ProductService {
  baseUrl = "http://localhost:3001/products";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-success"],
    });
  }
  //HTTP REST Routes

  //POST
  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, product).pipe(
      map((product) => product),
      catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage("Error while creating product...", true);
    return EMPTY;
  }

  //GET
  read(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl);
  }

  readById(id: string): Observable<Product> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Product>(url);
  }

  update(productToEdit: Product): Observable<Product> {
    const url = `${this.baseUrl}/${productToEdit.id}`;
    return this.http.put<Product>(url, productToEdit);
  }

  delete(productToDelete: Product): Observable<Product> {
    const url = `${this.baseUrl}/${productToDelete.id}`;
    return this.http.delete<Product>(url);
  }
}
