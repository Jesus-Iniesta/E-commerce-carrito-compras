import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () =>
            import('./productos/features/product-shell/product.route'),
    },
    {
        path: '**',
        redirectTo: '',
    }
];
