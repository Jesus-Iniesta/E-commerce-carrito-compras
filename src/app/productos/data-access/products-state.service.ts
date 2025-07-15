import { inject, Injectable } from "@angular/core";
import { Product } from "../../shared/interface/product.interface";
import { signalSlice } from "ngxtension/signal-slice";
import { ProductosService } from "./productos.service";
import { map } from "rxjs";

interface State{
    products: Product[];
    status: 'loading' | 'success' | 'error';
}

Injectable()
export class ProductsStateService {

    private productoService = inject(ProductosService);

    private initialState: State = {
        products: [],
        status: 'loading' as const,

    };

    state = signalSlice({
        initialState: this.initialState,
        sources: [
            this.productoService
            .getProductos()
            .pipe(
                map(products => ({
                    products,
                    status: 'success' as const
                }))
            ),
        ],
    });

}


