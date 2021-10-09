import { environment } from '@env';

interface Brand {
  alt: string;
  link: string;
  image: string;
}

export const BRANDS: Brand[] = [
  {
    image: environment.apiUrl + 'image/brand/acer.png',
    alt: 'Thương hiệu Acer',
    link: '#',
  },
  {
    image: environment.apiUrl + 'image/brand/afox.jpg',
    alt: 'Thương hiệu Afox',
    link: '#',
  },
  {
    image: environment.apiUrl + 'image/brand/apple.jpg',
    alt: 'Thương hiệu Apple',
    link: '#',
  },
  {
    image: environment.apiUrl + 'image/brand/ares.png',
    alt: 'Thương hiệu Ares',
    link: '#',
  },
  {
    image: environment.apiUrl + 'image/brand/asrock.jpg',
    alt: 'Thương hiệu AsRock',
    link: '#',
  },
  {
    image: environment.apiUrl + 'image/brand/asus.png',
    alt: 'Thương hiệu Asus',
    link: '#',
  },
  {
    image: environment.apiUrl + 'image/brand/cannon.png',
    alt: 'Thương hiệu Cannon',
    link: '#',
  },
  {
    image: environment.apiUrl + 'image/brand/coolermaster.png',
    alt: 'Thương hiệu CoolerMaster',
    link: '#',
  },
  {
    image: environment.apiUrl + 'image/brand/corsair.png',
    alt: 'Thương hiệu Corsair',
    link: '#',
  },
  {
    image: environment.apiUrl + 'image/brand/dell.png',
    alt: 'Thương hiệu Dell',
    link: '#',
  },
  {
    image: environment.apiUrl + 'image/brand/edra.jpg',
    alt: 'Thương hiệu Edra',
    link: '#',
  },
  {
    image: environment.apiUrl + 'image/brand/krom.jpg',
    alt: 'Thương hiệu Krom',
    link: '#',
  },
  {
    image: environment.apiUrl + 'image/brand/mad-catz.jpg',
    alt: 'Thương hiệu Mad Catz',
    link: '#',
  },
  {
    image: environment.apiUrl + 'image/brand/lg.png',
    alt: 'Thương hiệu LG',
    link: '#',
  },
  {
    image: environment.apiUrl + 'image/brand/msi.png',
    alt: 'Thương hiệu MSI',
    link: '#',
  },
  {
    image: environment.apiUrl + 'image/brand/razer.png',
    alt: 'Thương hiệu Razer',
    link: '#',
  },
];
