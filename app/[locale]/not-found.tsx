// app/[locale]/not-found.tsx

import { useTranslations } from "next-intl";
import Link from "next/link";

export default function LocaleNotFound() {
  const t = useTranslations("NotFound");

  return (
    <div>
      <h2>{t("title")}</h2>
      <p>{t("description")}</p>
      <Link href="/">{t("backHome")}</Link>
    </div>
  );
}
