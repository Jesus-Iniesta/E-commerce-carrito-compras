import { Injectable } from "@angular/core";
import { BaseHttpService } from "../../shared/data-access/base-http.service";
import { Observable } from "rxjs";
import { Product } from "../../shared/interface/product.interface";

@Injectable({ providedIn: 'root' })
export class ProductosService extends BaseHttpService {
    

    getProductos():Observable<Product[]> {
        return this.http.get<any>(`${this.apiUrl}/products`);
    }
}