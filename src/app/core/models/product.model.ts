export interface Product {
  id: string;

  name: string;
  link: string;
  price: number;
  priceOld: number;

  thumbnail: string;
  images: string[];
  ratingScore: number;
  ratingCount: number;
  guarantee: number;
  shortDescriptions: string[];
  available: boolean;
}
