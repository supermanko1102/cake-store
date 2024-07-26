import Link from "next/link";
import { useLocale } from "next-intl";

interface LocaleLinkProps extends React.ComponentProps<typeof Link> {
  href: string;
}

export function LocaleLink({ href, ...props }: LocaleLinkProps) {
  const locale = useLocale();
  const localePrefix = `/${locale}`;

  // 如果 href 已經包含語言前綴，則不添加
  const newHref = href.startsWith(localePrefix)
    ? href
    : `${localePrefix}${href}`;

  return <Link href={newHref} {...props} />;
}
