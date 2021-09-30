interface IconLink {
  iconId: string;
  externalUrl: string;
}

export interface FooterLinks {
  title: string;
  links: string[];
  iconLinks?: IconLink[];
}

const generalInfo: FooterLinks = {
  title: 'Thông tin chung',
  links: [
    'Giới thiệu TNC Store',
    'Tuyển dụng',
    'Tin tức',
    'Ý kiến khách hàng',
    'Liên hệ hợp tác',
  ],
};

const generalPolicy: FooterLinks = {
  title: 'Chính sách chung',
  links: [
    'Quy định chung',
    'Chính sách vận chuyển',
    'Chính sách bảo hành',
    'Chính sách đổi trả hàng',
    'Chính sách cho doanh nghiệp',
  ],
};

const promotionInfo: FooterLinks = {
  title: 'Thông tin khuyến mãi',
  links: ['Sản phẩm bán chạy', 'Sản phẩm khuyến mãi', 'Hàng thanh lý'],
};

const socialInfo: FooterLinks = {
  title: 'Follow us!',
  links: [],
  iconLinks: [
    { iconId: 'facebook', externalUrl: 'https://www.facebook.com/tncstore/' },
    {
      iconId: 'youtube',
      externalUrl: 'https://www.youtube.com/channel/UCvLGkK-wBBaoXwV71Tgx08Q',
    },
    { iconId: 'twitter', externalUrl: 'https://www.facebook.com/tncstore/' },
    {
      iconId: 'instagram',
      externalUrl: 'https://www.instagram.com/tncstore_vn/',
    },
  ],
};

export const linksGroups: FooterLinks[] = [
  generalInfo,
  generalPolicy,
  promotionInfo,
  socialInfo,
];
