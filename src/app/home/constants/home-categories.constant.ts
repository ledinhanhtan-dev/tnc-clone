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
      'https://tnc-clone.herokuapp.com/image/category/home-category-gaming-workstation.png',
    color: '#FF8E02',
    routerLink: '/page/xay-dung-cau-hinh-pc',
  },
  {
    title: 'GAMING LAPTOP',
    image:
      'https://tnc-clone.herokuapp.com/image/category/home-category-gaming-laptops.png',
    color: '#FFF200',
    routerLink: '#',
  },
  {
    title: 'GAMING GEARS',
    image:
      'https://tnc-clone.herokuapp.com/image/category/home-category-gaming-gears.png',
    color: '#1EEC18',
    routerLink: '#',
  },
  {
    title: 'PHỤ KIỆN TẢN NHIỆT PC',
    image:
      'https://tnc-clone.herokuapp.com/image/category/home-category-accessories.png',
    color: '#8E07EF',
    routerLink: '#',
  },
  {
    title: 'LINH KIỆN MÁY TÍNH',
    image:
      'https://tnc-clone.herokuapp.com/image/category/home-category-hardwares.png',
    color: '#00F9C9',
    routerLink: '#',
  },
  {
    title: 'MÀN HÌNH MÁY TÍNH',
    image:
      'https://tnc-clone.herokuapp.com/image/category/home-category-monitors.png',
    color: '#F9495F',
    routerLink: '#',
  },
  {
    title: 'BÀN GHẾ GAMING',
    image:
      'https://tnc-clone.herokuapp.com/image/category/home-category-chairs.png',
    color: '#665DEA',
    routerLink: '#',
  },
  {
    title: 'THIẾT BỊ MẠNG',
    image:
      'https://tnc-clone.herokuapp.com/image/category/home-category-network-devices.png',
    color: '#F1E89B',
    routerLink: '#',
  },
];
