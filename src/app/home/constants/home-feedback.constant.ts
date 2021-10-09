import { environment } from '@env';

export interface HomeFeedback {
  link: string;
  image: string;
}

export const HOME_FEEDBACKS: HomeFeedback[] = [
  {
    image: environment.apiUrl + 'image/feedback/fb-1.jpg',
    link: '#',
  },
  {
    image: environment.apiUrl + 'image/feedback/fb-2.jpg',
    link: '#',
  },
  {
    image: environment.apiUrl + 'image/feedback/fb-3.jpg',
    link: '#',
  },
  {
    image: environment.apiUrl + 'image/feedback/fb-4.jpg',
    link: '#',
  },
  {
    image: environment.apiUrl + 'image/feedback/fb-5.jpg',
    link: '#',
  },
];
