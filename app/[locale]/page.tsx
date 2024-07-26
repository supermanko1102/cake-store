import FeaturedProducts from "@/components/home/FeaturedProducts";
import Hero from "@/components/home/Hero";
import LoadingContainer from "@/components/global/LoadingContainer";
import { Suspense } from "react";
import { unstable_setRequestLocale } from "next-intl/server";

type Props = {
  params: { locale: string };
};

function HomPage({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);
  return (
    <>
      <Hero />
      <Suspense fallback={<LoadingContainer />}>
        <FeaturedProducts />
      </Suspense>
    </>
  );
}
export default HomPage;
