import { MegaMenuComponent } from './mega-menu/mega-menu.component';
import { MegaMenuMobileComponent } from './mega-menu-mobile/mega-menu-mobile.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FooterComponent } from './footer/footer.component';
import { FooterTopComponent } from './footer/footer-top/footer-top.component';
import { FooterBottomComponent } from './footer/footer-bottom/footer-bottom.component';
import { FooterLinksComponent } from './footer/footer-links/footer-links.component';
import { HeaderComponent } from './header/header.component';
import { HeaderMainComponent } from './header/header-main/header-main.component';
import { HeaderBottomComponent } from './header/header-bottom/header-bottom.component';
import { HeaderBottomMobileComponent } from './header/header-bottom-mobile/header-bottom-mobile.component';
import { HeaderSearchComponent } from './header/header-search/header-search.component';
import { HeaderCartComponent } from './header/header-cart/header-cart.component';
import { HeaderItemComponent } from './header/header-item/header-item.component';

export const components: any[] = [
  HeaderComponent,
  HeaderMainComponent,
  HeaderBottomComponent,
  HeaderBottomMobileComponent,
  HeaderSearchComponent,
  HeaderCartComponent,
  HeaderItemComponent,

  MegaMenuComponent,
  MegaMenuMobileComponent,

  FooterComponent,
  FooterTopComponent,
  FooterLinksComponent,
  FooterBottomComponent,

  PageNotFoundComponent,
];

export * from './header/header.component';
export * from './footer/footer.component';
export * from './page-not-found/page-not-found.component';
