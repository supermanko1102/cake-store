import React from "react";
import { unstable_setRequestLocale } from "next-intl/server";

type Props = {
  params: { locale: string };
};
function SalePage({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);
  return <div>SalePage</div>;
}

export default SalePage;
