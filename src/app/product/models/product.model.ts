export interface Product {
  idName: string;

  name: string;
  link: string;
  price: number;
  priceOld: number;

  thumbnail: string;
  images: string[];
  rating: number;
  guarantee: number;
  shortDescriptions: string[];
  available: boolean;
}
