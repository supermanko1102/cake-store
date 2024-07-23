type NavLink = {
  href: string;
  label: string;
};

export const links: NavLink[] = [
  { href: "/", label: "首頁" },
  { href: "/about", label: "關於" },
  { href: "/products", label: "產品" },
  { href: "/favorites", label: "最愛" },
  { href: "/cart", label: "購物車" },
  { href: "/orders", label: "訂單" },
  { href: "/admin/sales", label: "儀表板" },
];

export const adminLinks: NavLink[] = [
  { href: "/admin/sales", label: "銷售" },
  { href: "/admin/products", label: "產品" },
  { href: "/admin/products/create", label: "建立產品" },
];
