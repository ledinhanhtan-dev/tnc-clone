import { environment } from '@env';

export interface HomeFeaturedProduct {
  image: string;
  alt: string;
  id: string;
}

export const HOME_FEATURED_PRODUCTS: HomeFeaturedProduct[] = [
  {
    image: environment.apiUrl + 'image/featured/featured-product-1.jpg',
    alt: '',
    id: '#',
  },
  {
    image: environment.apiUrl + 'image/featured/featured-product-2.jpg',
    alt: '',
    id: '#',
  },
  {
    image: environment.apiUrl + 'image/featured/featured-product-3.jpg',
    alt: '',
    id: '#',
  },
  {
    image: environment.apiUrl + 'image/featured/featured-product-4.jpg',
    alt: '',
    id: '#',
  },
  {
    image: environment.apiUrl + 'image/featured/featured-product-5.jpg',
    alt: '',
    id: '#',
  },
];
