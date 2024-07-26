import Container from "@/components/global/Container";
import Navbar from "@/components/navbar/Navbar";
import Providers from "./providers";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { ClerkProvider } from "@clerk/nextjs";
import { unstable_setRequestLocale } from "next-intl/server";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "zh-Hant" }];
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  let messages;
  try {
    messages = (await import(`../../public/locales/${locale}/common.json`))
      .default;

    messages = JSON.parse(JSON.stringify(messages));
  } catch (error) {
    notFound();
  }

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <ClerkProvider>
        <Providers>
          <Navbar />
          <Container className="p-20">{children}</Container>
        </Providers>
      </ClerkProvider>
    </NextIntlClientProvider>
  );
}
