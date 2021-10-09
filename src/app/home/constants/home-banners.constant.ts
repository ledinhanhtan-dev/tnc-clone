import { environment } from '@env';
export interface HomeBanner {
  link: string;
  alt: string;
  image: string;
}

export const HERO_BANNERS: HomeBanner[] = [
  {
    link: '#',
    image: environment.apiUrl + 'image/banner/banner-01.jpg',
    alt: '',
  },
  {
    link: '#',
    image: environment.apiUrl + 'image/banner/banner-02.jpg',
    alt: '',
  },
  {
    link: '#',
    image: environment.apiUrl + 'image/banner/banner-03.jpg',
    alt: '',
  },
  {
    link: '#',
    image: environment.apiUrl + 'image/banner/banner-04.jpg',
    alt: '',
  },
  {
    link: '#',
    image: environment.apiUrl + 'image/banner/banner-05.jpg',
    alt: '',
  },
  {
    link: '#',
    image: environment.apiUrl + 'image/banner/banner-06.jpg',
    alt: '',
  },
  {
    link: '#',
    image: environment.apiUrl + 'image/banner/banner-07.jpg',
    alt: '',
  },
  {
    link: '#',
    image: environment.apiUrl + 'image/banner/banner-08.jpg',
    alt: '',
  },
  {
    link: '#',
    image: environment.apiUrl + 'image/banner/banner-09.jpg',
    alt: '',
  },
];

export const SUB_BANNERS: HomeBanner[] = [
  {
    link: '#',
    image: environment.apiUrl + 'image/banner/store-asus.jpg',
    alt: '',
  },
  {
    link: '#',
    image: environment.apiUrl + 'image/banner/store-lg.jpg',
    alt: '',
  },
  {
    link: '#',
    image: environment.apiUrl + 'image/banner/store-acer.jpg',
    alt: '',
  },
  {
    link: '#',
    image: environment.apiUrl + 'image/banner/store-nzxt.jpg',
    alt: '',
  },
];
