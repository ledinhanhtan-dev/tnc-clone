interface CategoryItem {
  itemTitle: string;
  itemLink: string;
}

export interface Category {
  title: string;
  link: string;
  imagePath: string;
  items: CategoryItem[];
}

const pcCat: Category = {
  title: 'Xây dựng cấu hình PC',
  link: '#',
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

const laptopCat: Category = {
  title: 'Laptops',
  link: '#',
  imagePath: 'http://localhost:3000/image/category/category-laptop.png',
  items: [
    { itemTitle: 'Gaming Laptop', itemLink: '#' },
    { itemTitle: 'Laptop Văn Phòng', itemLink: '#' },
  ],
};

const hardwareCat: Category = {
  title: 'Link kiện máy tính',
  link: '#',
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

const monitorCat: Category = {
  title: 'Màn hình máy tính',
  link: '#',
  imagePath: 'http://localhost:3000/image/category/category-monitor.png',
  items: [
    { itemTitle: 'Màn Hình Gaming', itemLink: '#' },
    { itemTitle: 'Màn Hình Đồ Họa', itemLink: '#' },
    { itemTitle: 'Màn Hình Văn Phòng', itemLink: '#' },
  ],
};

const gearCat: Category = {
  title: 'Gaming Gears',
  link: '#',
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

const accessoryCat: Category = {
  title: 'Phụ Kiện - Tản Nhiệt PC',
  link: '#',
  imagePath: 'http://localhost:3000/image/category/category-accessory.png',
  items: [
    { itemTitle: 'Tản nhiệt khí cho PC', itemLink: '#' },
    { itemTitle: 'Tản nước All-in-one', itemLink: '#' },
    { itemTitle: 'Quạt Tản Nhiệt PC', itemLink: '#' },
    { itemTitle: 'Dây Nối Dài - Dây Riser', itemLink: '#' },
    { itemTitle: 'Giá đỡ VGA', itemLink: '#' },
  ],
};

const officeCat: Category = {
  title: 'Thiết Bị Văn Phòng',
  link: '#',
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

const networkCat: Category = {
  title: 'Thiết Bị Mạng',
  link: '#',
  imagePath: 'http://localhost:3000/image/category/category-network.png',
  items: [
    { itemTitle: 'Router Wifi', itemLink: '#' },
    { itemTitle: 'Card Wifi', itemLink: '#' },
  ],
};

// prettier-ignore
export const categories: Category[] = [pcCat, laptopCat, hardwareCat, monitorCat, gearCat, accessoryCat, officeCat, networkCat];
