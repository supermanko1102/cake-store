type NavLink = {
  href: string;
  labelKey: string;
};

export const links: NavLink[] = [
  { href: "/", labelKey: "common.home" },
  { href: "/about", labelKey: "common.about" },
  { href: "/products", labelKey: "common.products" },
  { href: "/favorites", labelKey: "common.favorites" },
  { href: "/cart", labelKey: "common.cart" },
  { href: "/orders", labelKey: "common.orders" },
  { href: "/admin/sales", labelKey: "common.dashboard" },
];

export const adminLinks: NavLink[] = [
  { href: "/admin/sales", labelKey: "adCommon.sales" },
  { href: "/admin/products", labelKey: "adCommon.products" },
  { href: "/admin/products/create", labelKey: "adCommon.createProduct" },
];

export const getLocalizedLinks = (locale: string): NavLink[] => {
  return links.map((link) => ({
    ...link,
    href: `/${locale}${link.href}`,
  }));
};

export const getLocalizedAdminLinks = (locale: string): NavLink[] => {
  return adminLinks.map((link) => ({
    ...link,
    href: `/${locale}${link.href}`,
  }));
};
