interface CategoryItem {
  itemTitle: string;
  itemLink: string;
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
    { itemTitle: 'PRO GAMING PC', itemLink: '#' },
    { itemTitle: 'PRO WORKSTATION', itemLink: '#' },
    { itemTitle: 'PRO PRODUCTIVITY', itemLink: '#' },
    { itemTitle: 'PRO CREATOR', itemLink: '#' },
    { itemTitle: 'PRO AUDIO', itemLink: '#' },
    { itemTitle: 'PRO VR', itemLink: '#' },
  ],
};

const LAPTOP_CAT: Category = {
  title: 'Laptops',
  routerLink: '#',
  imagePath: 'http://localhost:3000/image/category/category-laptop.png',
  items: [
    { itemTitle: 'Gaming Laptop', itemLink: '#' },
    { itemTitle: 'Laptop Văn Phòng', itemLink: '#' },
  ],
};

const HARDWARE_CAT: Category = {
  title: 'Link kiện máy tính',
  routerLink: '#',
  imagePath: 'http://localhost:3000/image/category/category-hardware.png',
  items: [
    { itemTitle: 'CPU - Bộ vi xử lý', itemLink: '#' },
    { itemTitle: 'Case - Vỏ máy tính', itemLink: '#' },
    { itemTitle: 'Mainboard - Bo mạch chủ', itemLink: '#' },
    { itemTitle: 'Ram - Bộ nhớ trong', itemLink: '#' },
    { itemTitle: 'Ổ cứng SSD', itemLink: '#' },
    { itemTitle: 'Ổ cứng HDD', itemLink: '#' },
    { itemTitle: 'VGA - Card màn hình', itemLink: '#' },
    { itemTitle: 'PSU - Nguồn máy tính', itemLink: '#' },
    { itemTitle: 'Combo Linh Kiện', itemLink: '#' },
  ],
};

const MONITOR_CAT: Category = {
  title: 'Màn hình máy tính',
  routerLink: '#',
  imagePath: 'http://localhost:3000/image/category/category-monitor.png',
  items: [
    { itemTitle: 'Màn Hình Gaming', itemLink: '#' },
    { itemTitle: 'Màn Hình Đồ Họa', itemLink: '#' },
    { itemTitle: 'Màn Hình Văn Phòng', itemLink: '#' },
  ],
};

const GEAR_CAT: Category = {
  title: 'Gaming Gears',
  routerLink: '#',
  imagePath: 'http://localhost:3000/image/category/category-gear.png',
  items: [
    { itemTitle: 'Bàn Phím Cơ', itemLink: '#' },
    { itemTitle: 'Bàn Di Chuột', itemLink: '#' },
    { itemTitle: 'Microphone', itemLink: '#' },
    { itemTitle: 'Chuột Gaming', itemLink: '#' },
    { itemTitle: 'Bàn, Ghế Gaming', itemLink: '#' },
    { itemTitle: 'Tai Nghe Gaming', itemLink: '#' },
    { itemTitle: 'Thiết Bị Stream', itemLink: '#' },
  ],
};

const ACCESSORY_CAT: Category = {
  title: 'Phụ Kiện - Tản Nhiệt PC',
  routerLink: '#',
  imagePath: 'http://localhost:3000/image/category/category-accessory.png',
  items: [
    { itemTitle: 'Tản nhiệt khí cho PC', itemLink: '#' },
    { itemTitle: 'Tản nước All-in-one', itemLink: '#' },
    { itemTitle: 'Quạt Tản Nhiệt PC', itemLink: '#' },
    { itemTitle: 'Dây Nối Dài - Dây Riser', itemLink: '#' },
    { itemTitle: 'Giá đỡ VGA', itemLink: '#' },
  ],
};

const OFFICE_CAT: Category = {
  title: 'Thiết Bị Văn Phòng',
  routerLink: '#',
  imagePath: 'http://localhost:3000/image/category/category-office.png',
  items: [
    { itemTitle: 'Loa máy tính', itemLink: '#' },
    { itemTitle: 'Phần mềm bản quyền', itemLink: '#' },
    { itemTitle: 'Bàn phím - Chuột', itemLink: '#' },
    { itemTitle: 'Bộ bàn phím chuột không dây', itemLink: '#' },
    { itemTitle: 'Máy in Laser', itemLink: '#' },
    { itemTitle: 'Webcam', itemLink: '#' },
    { itemTitle: 'Bộ chia/USB Hub', itemLink: '#' },
  ],
};

const NETWORK_CAT: Category = {
  title: 'Thiết Bị Mạng',
  routerLink: '#',
  imagePath: 'http://localhost:3000/image/category/category-network.png',
  items: [
    { itemTitle: 'Router Wifi', itemLink: '#' },
    { itemTitle: 'Card Wifi', itemLink: '#' },
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
