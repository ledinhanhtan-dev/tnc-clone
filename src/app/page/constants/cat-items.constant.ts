export interface CatItem {
  title: string;
  desc: string;
  img: string;
  routerLink: string;
}

export const CAT_ITEMS: CatItem[] = [
  {
    title: 'PRO GAMING',
    desc: 'PC cấu hình khủng cùng linh kiện cao cấp, đem tới trải nghiệm gaming hấp dẫn nhất.',
    img: 'http://localhost:3000/image/page/cat-gp-gaming.png',
    routerLink: '/category/gaming-pc',
  },
  {
    title: 'PRO WORKSTATION',
    desc: 'Cấu hình PC chuyên dụng cho các công việc thiết kế, kiến trúc, đồ họa đòi hỏi hiệu suất cao.',
    img: 'http://localhost:3000/image/page/cat-gp-video.png',
    routerLink: '/category/workstation-pc',
  },
  {
    title: 'PRO CREATOR',
    desc: 'PC có tính thẩm mỹ cao năng lực xử lý vượt trội cho các nhà sáng tạo nội dung.',
    img: 'http://localhost:3000/image/page/cat-gp-graphic.png',
    routerLink: '/category/creator-pc',
  },
  {
    title: 'PRO-DUCTIVITY',
    desc: 'PC dựng sẵn với kích thước và hiệu năng phù hợp cho công việc văn phòng và giải trí tại gia.',
    img: 'http://localhost:3000/image/page/cat-gp-ductivity.png',
    routerLink: '/category/productivity-pc',
  },
  {
    title: 'PRO AUDIO',
    desc: 'Cấu hình PC tối ưu cho Studio âm nhạc, dành cho Composer/Producer',
    img: 'http://localhost:3000/image/page/cat-gp-audio.png',
    routerLink: '/category/pro-audio',
  },
  {
    title: 'PRO VR',
    desc: 'Thế giới ảo, trải nghiệm thật với cấu hình PC chuyên Virtual Reality',
    img: 'http://localhost:3000/image/page/cat-gp-vr.png',
    routerLink: '/category/pro-vr',
  },
];
