import { environment } from '@env';
import { FeaturedProduct } from '@shared/models/featured-product.model';

export const HOME_FEATURED_PRODUCTS: FeaturedProduct[] = [
  {
    image: environment.apiUrl + 'image/featured/featured-product-1.jpg',
    slug: '#',
  },
  {
    image: environment.apiUrl + 'image/featured/featured-product-2.jpg',
    slug: '#',
  },
  {
    image: environment.apiUrl + 'image/featured/featured-product-3.jpg',
    slug: '#',
  },
  {
    image: environment.apiUrl + 'image/featured/featured-product-4.jpg',
    slug: '#',
  },
  {
    image: environment.apiUrl + 'image/featured/featured-product-5.jpg',
    slug: '#',
  },
];
