import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'productos',
        loadChildren: () =>
         import('./productos/features/product-shell/product.route'),
    },
    {
        path: '**',
        redirectTo: 'productos',
    }
];
