interface CategoryItem {
  title: string;
  routerLink: string;
}

export interface Category {
  title: string;
  routerLink: string;
  imagePath: string;
  items: CategoryItem[];
}

const PC_CAT: Category = {
  title: 'Xây dựng cấu hình PC',
  routerLink: '/page/xay-dung-cau-hinh-pc',
  imagePath: 'http://localhost:3000/image/category/category-pc.png',
  items: [
    { title: 'PRO GAMING PC', routerLink: '/category/gaming-pc' },
    { title: 'PRO WORKSTATION', routerLink: '#' },
    { title: 'PRO PRODUCTIVITY', routerLink: '#' },
    { title: 'PRO CREATOR', routerLink: '#' },
    { title: 'PRO AUDIO', routerLink: '#' },
    { title: 'PRO VR', routerLink: '#' },
  ],
};

const LAPTOP_CAT: Category = {
  title: 'Laptops',
  routerLink: '#',
  imagePath: 'http://localhost:3000/image/category/category-laptop.png',
  items: [
    { title: 'Gaming Laptop', routerLink: '#' },
    { title: 'Laptop Văn Phòng', routerLink: '#' },
  ],
};

const HARDWARE_CAT: Category = {
  title: 'Link kiện máy tính',
  routerLink: '#',
  imagePath: 'http://localhost:3000/image/category/category-hardware.png',
  items: [
    { title: 'CPU - Bộ vi xử lý', routerLink: '#' },
    { title: 'Case - Vỏ máy tính', routerLink: '#' },
    { title: 'Mainboard - Bo mạch chủ', routerLink: '#' },
    { title: 'Ram - Bộ nhớ trong', routerLink: '#' },
    { title: 'Ổ cứng SSD', routerLink: '#' },
    { title: 'Ổ cứng HDD', routerLink: '#' },
    { title: 'VGA - Card màn hình', routerLink: '#' },
    { title: 'PSU - Nguồn máy tính', routerLink: '#' },
    { title: 'Combo Linh Kiện', routerLink: '#' },
  ],
};

const MONITOR_CAT: Category = {
  title: 'Màn hình máy tính',
  routerLink: '#',
  imagePath: 'http://localhost:3000/image/category/category-monitor.png',
  items: [
    { title: 'Màn Hình Gaming', routerLink: '#' },
    { title: 'Màn Hình Đồ Họa', routerLink: '#' },
    { title: 'Màn Hình Văn Phòng', routerLink: '#' },
  ],
};

const GEAR_CAT: Category = {
  title: 'Gaming Gears',
  routerLink: '#',
  imagePath: 'http://localhost:3000/image/category/category-gear.png',
  items: [
    { title: 'Bàn Phím Cơ', routerLink: '#' },
    { title: 'Bàn Di Chuột', routerLink: '#' },
    { title: 'Microphone', routerLink: '#' },
    { title: 'Chuột Gaming', routerLink: '#' },
    { title: 'Bàn, Ghế Gaming', routerLink: '#' },
    { title: 'Tai Nghe Gaming', routerLink: '#' },
    { title: 'Thiết Bị Stream', routerLink: '#' },
  ],
};

const ACCESSORY_CAT: Category = {
  title: 'Phụ Kiện - Tản Nhiệt PC',
  routerLink: '#',
  imagePath: 'http://localhost:3000/image/category/category-accessory.png',
  items: [
    { title: 'Tản nhiệt khí cho PC', routerLink: '#' },
    { title: 'Tản nước All-in-one', routerLink: '#' },
    { title: 'Quạt Tản Nhiệt PC', routerLink: '#' },
    { title: 'Dây Nối Dài - Dây Riser', routerLink: '#' },
    { title: 'Giá đỡ VGA', routerLink: '#' },
  ],
};

const OFFICE_CAT: Category = {
  title: 'Thiết Bị Văn Phòng',
  routerLink: '#',
  imagePath: 'http://localhost:3000/image/category/category-office.png',
  items: [
    { title: 'Loa máy tính', routerLink: '#' },
    { title: 'Phần mềm bản quyền', routerLink: '#' },
    { title: 'Bàn phím - Chuột', routerLink: '#' },
    { title: 'Bộ bàn phím chuột không dây', routerLink: '#' },
    { title: 'Máy in Laser', routerLink: '#' },
    { title: 'Webcam', routerLink: '#' },
    { title: 'Bộ chia/USB Hub', routerLink: '#' },
  ],
};

const NETWORK_CAT: Category = {
  title: 'Thiết Bị Mạng',
  routerLink: '#',
  imagePath: 'http://localhost:3000/image/category/category-network.png',
  items: [
    { title: 'Router Wifi', routerLink: '#' },
    { title: 'Card Wifi', routerLink: '#' },
  ],
};

// prettier-ignore
export const MEGA_MENU_CATEGORIES: Category[] = [
  PC_CAT,
  LAPTOP_CAT,
  HARDWARE_CAT,
  MONITOR_CAT,
  GEAR_CAT,
  ACCESSORY_CAT,
  OFFICE_CAT,
  NETWORK_CAT,
];
