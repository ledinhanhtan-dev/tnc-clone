import { environment } from '@env';

export interface HomeChannel {
  title: string;
  image: string;
  link: string;
  alt: string;
}

export const HOME_CHANNELS: HomeChannel[] = [
  {
    title:
      'PEWPEW MUA PC 27 TRIỆU Và Pha Chốt Đơn Nhanh Như HACK SPEED Tại TNC Store! - Mua PC Như Mua Rau',
    alt: 'PEWPEW MUA PC 27 TRIỆU Và Pha Chốt Đơn Nhanh Như HACK SPEED Tại TNC Store! - Mua PC Như Mua Rau',
    link: '#',
    image: environment.apiUrl + 'image/channel/channel-1.jpg',
  },
  {
    title:
      'Cấu Hình PC Chơi Liên Minh Huyền Thoại "10 NĂM KHÔNG HỎNG" Của Nữ MC-Streamer Minh Nghi',
    alt: 'Cấu Hình PC Chơi Liên Minh Huyền Thoại "10 NĂM KHÔNG HỎNG" Của Nữ MC-Streamer Minh Nghi',
    link: '#',
    image: environment.apiUrl + 'image/channel/channel-2.jpg',
  },
  {
    title:
      'KHÁNH VY ĐI MUA PC BỊ PEWPEW "THUỐC ĐỒ NGON" TẠI TNC STORE NHƯ THẾ NÀO? [REACTION]',
    alt: 'KHÁNH VY ĐI MUA PC BỊ PEWPEW "THUỐC ĐỒ NGON" TẠI TNC STORE NHƯ THẾ NÀO? [REACTION]',
    link: '#',
    image: environment.apiUrl + 'image/channel/channel-3.jpg',
  },
  {
    title:
      'Khi Độ Mixi Đi Lượn Phố Vớ Được Hàng Khủng... Màn Hình Cực Nét Thì Stream Đến Bao Giờ??',
    alt: 'Khi Độ Mixi Đi Lượn Phố Vớ Được Hàng Khủng... Màn Hình Cực Nét Thì Stream Đến Bao Giờ??',
    link: '#',
    image: environment.apiUrl + 'image/channel/channel-4.jpg',
  },
  {
    title:
      'Đập hộp dàn Mainboard Z490 siêu khủng của ASUS - Phổ cập Thunderbolt 3 đến mọi nhà',
    alt: 'Đập hộp dàn Mainboard Z490 siêu khủng của ASUS - Phổ cập Thunderbolt 3 đến mọi nhà',
    link: '#',
    image: environment.apiUrl + 'image/channel/channel-5.jpg',
  },
];
