import { environment } from '@env';
export interface HomeBanner {
  routerLink: string;
  alt: string;
  image: string;
}

export const HERO_BANNERS: HomeBanner[] = [
  {
    routerLink: '#',
    image: environment.apiUrl + 'image/banner/banner-01.jpg',
    alt: '',
  },
  {
    routerLink: '#',
    image: environment.apiUrl + 'image/banner/banner-02.jpg',
    alt: '',
  },
  {
    routerLink: '#',
    image: environment.apiUrl + 'image/banner/banner-03.jpg',
    alt: '',
  },
  {
    routerLink: '#',
    image: environment.apiUrl + 'image/banner/banner-04.jpg',
    alt: '',
  },
  {
    routerLink: '#',
    image: environment.apiUrl + 'image/banner/banner-05.jpg',
    alt: '',
  },
  {
    routerLink: '#',
    image: environment.apiUrl + 'image/banner/banner-06.jpg',
    alt: '',
  },
  {
    routerLink: '#',
    image: environment.apiUrl + 'image/banner/banner-07.jpg',
    alt: '',
  },
  {
    routerLink: '#',
    image: environment.apiUrl + 'image/banner/banner-08.jpg',
    alt: '',
  },
  {
    routerLink: '#',
    image: environment.apiUrl + 'image/banner/banner-09.jpg',
    alt: '',
  },
];

export const SUB_BANNERS: HomeBanner[] = [
  {
    routerLink: '/store/msi-official-store',
    image: environment.apiUrl + 'image/banner/store-msi.jpg',
    alt: '',
  },
  {
    routerLink: '/store/asus-official-store',
    image: environment.apiUrl + 'image/banner/store-asus.jpg',
    alt: '',
  },
  {
    routerLink: '/store/lg-official-store',
    image: environment.apiUrl + 'image/banner/store-lg.jpg',
    alt: '',
  },
  {
    routerLink: '/store/acer-official-store',
    image: environment.apiUrl + 'image/banner/store-acer.jpg',
    alt: '',
  },
  {
    routerLink: '/store/nzxt-official-store',
    image: environment.apiUrl + 'image/banner/store-nzxt.jpg',
    alt: '',
  },
];
