import { environment } from '@env';

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
  routerLink: '/xay-dung-cau-hinh-pc',
  imagePath: environment.apiUrl + 'image/category/category-pc.png',
  items: [
    { title: 'PRO GAMING PC', routerLink: '/category/gaming-pc' },
    { title: 'PRO WORKSTATION', routerLink: '/category/workstation-pc' },
    { title: 'PRO PRODUCTIVITY', routerLink: '/category/productivity-pc' },
    { title: 'PRO CREATOR', routerLink: '/category/creator-pc' },
    { title: 'PRO AUDIO', routerLink: '/category/pro-audio' },
    { title: 'PRO VR', routerLink: '/category/pro-vr' },
  ],
};

const LAPTOP_CAT: Category = {
  title: 'Laptops',
  routerLink: '/category/',
  imagePath: environment.apiUrl + 'image/category/category-laptop.png',
  items: [
    { title: 'Gaming Laptop', routerLink: '/category/gaming-laptop' },
    { title: 'Laptop Văn Phòng', routerLink: '/category/office-laptop' },
  ],
};

const HARDWARE_CAT: Category = {
  title: 'Link kiện máy tính',
  routerLink: '/category/',
  imagePath: environment.apiUrl + 'image/category/category-hardware.png',
  items: [
    { title: 'CPU - Bộ vi xử lý', routerLink: '/category/cpu' },
    { title: 'Case - Vỏ máy tính', routerLink: '/category/case' },
    { title: 'Mainboard - Bo mạch chủ', routerLink: '/category/mainboard' },
    { title: 'Ram - Bộ nhớ trong', routerLink: '/category/ram' },
    { title: 'Ổ cứng SSD', routerLink: '/category/ssd' },
    { title: 'Ổ cứng HDD', routerLink: '/category/hdd' },
    { title: 'VGA - Card màn hình', routerLink: '/category/vga' },
    { title: 'PSU - Nguồn máy tính', routerLink: '/category/psu' },
    { title: 'Combo Linh Kiện', routerLink: '/category/combo' },
  ],
};

const MONITOR_CAT: Category = {
  title: 'Màn hình máy tính',
  routerLink: '/category/',
  imagePath: environment.apiUrl + 'image/category/category-monitor.png',
  items: [
    { title: 'Màn Hình Gaming', routerLink: '/category/gaming-monitor' },
    { title: 'Màn Hình Đồ Họa', routerLink: '/category/graphics-monitor' },
    { title: 'Màn Hình Văn Phòng', routerLink: '/category/office-monitor' },
  ],
};

const GEAR_CAT: Category = {
  title: 'Gaming Gears',
  routerLink: '/category/',
  imagePath: environment.apiUrl + 'image/category/category-gear.png',
  items: [
    { title: 'Bàn Phím Cơ', routerLink: '/category/gaming-keyboard' },
    { title: 'Bàn Di Chuột', routerLink: '/category/mousepad' },
    { title: 'Microphone', routerLink: '/category/microphone' },
    { title: 'Chuột Gaming', routerLink: '/category/gaming-mouse' },
    { title: 'Bàn, Ghế Gaming', routerLink: '/category/gaming-chaird' },
    { title: 'Tai Nghe Gaming', routerLink: '/category/gaming-headset' },
    { title: 'Thiết Bị Stream', routerLink: '/category/streaming-device' },
  ],
};

const ACCESSORY_CAT: Category = {
  title: 'Phụ Kiện - Tản Nhiệt PC',
  routerLink: '/category/',
  imagePath: environment.apiUrl + 'image/category/category-accessory.png',
  items: [
    { title: 'Tản nhiệt khí cho PC', routerLink: '/category/air-cooler' },
    { title: 'Tản nước All-in-one', routerLink: '/category/liquid-cooler' },
    { title: 'Quạt Tản Nhiệt PC', routerLink: '/category/cooler-fan' },
    { title: 'Dây Nối Dài - Dây Riser', routerLink: '/category/riser-cable' },
    { title: 'Giá đỡ VGA', routerLink: '/category/vga-holder' },
  ],
};

const OFFICE_CAT: Category = {
  title: 'Thiết Bị Văn Phòng',
  routerLink: '/category/',
  imagePath: environment.apiUrl + 'image/category/category-office.png',
  items: [
    { title: 'Loa máy tính', routerLink: '/category/speaker' },
    { title: 'Phần mềm bản quyền', routerLink: '/category/software' },
    { title: 'Bàn phím - Chuột', routerLink: '/category/office-mouse' },
    {
      title: 'Bộ bàn phím chuột không dây',
      routerLink: '/category/wireless-mouse',
    },
    { title: 'Máy in Laser', routerLink: '/category/laser-printer' },
    { title: 'Webcam', routerLink: '/category/webcam' },
    { title: 'Bộ chia USB', routerLink: '/category/usb-hub' },
  ],
};

const NETWORK_CAT: Category = {
  title: 'Thiết Bị Mạng',
  routerLink: '/category/',
  imagePath: environment.apiUrl + 'image/category/category-network.png',
  items: [
    { title: 'Router Wifi', routerLink: '/category/router-wifi' },
    { title: 'Card Wifi', routerLink: '/category/card-wifi' },
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
