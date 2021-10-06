export interface HomeCategory {
  title: string;
  image: string;
  color: string;
  routerLink: string;
}

export const HOME_CATEGORIES: HomeCategory[] = [
  {
    title: 'GAMING WORKSTATION PC',
    image:
      'http://localhost:3000/image/category/home-category-gaming-workstation.png',
    color: '#FF8E02',
    routerLink: '/page/xay-dung-cau-hinh-pc',
  },
  {
    title: 'GAMING LAPTOP',
    image:
      'http://localhost:3000/image/category/home-category-gaming-laptops.png',
    color: '#FFF200',
    routerLink: '#',
  },
  {
    title: 'GAMING GEARS',
    image:
      'http://localhost:3000/image/category/home-category-gaming-gears.png',
    color: '#1EEC18',
    routerLink: '#',
  },
  {
    title: 'PHỤ KIỆN TẢN NHIỆT PC',
    image: 'http://localhost:3000/image/category/home-category-accessories.png',
    color: '#8E07EF',
    routerLink: '#',
  },
  {
    title: 'LINH KIỆN MÁY TÍNH',
    image: 'http://localhost:3000/image/category/home-category-hardwares.png',
    color: '#00F9C9',
    routerLink: '#',
  },
  {
    title: 'MÀN HÌNH MÁY TÍNH',
    image: 'http://localhost:3000/image/category/home-category-monitors.png',
    color: '#F9495F',
    routerLink: '#',
  },
  {
    title: 'BÀN GHẾ GAMING',
    image: 'http://localhost:3000/image/category/home-category-chairs.png',
    color: '#665DEA',
    routerLink: '#',
  },
  {
    title: 'THIẾT BỊ MẠNG',
    image:
      'http://localhost:3000/image/category/home-category-network-devices.png',
    color: '#F1E89B',
    routerLink: '#',
  },
];
