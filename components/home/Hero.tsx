import Link from "next/link";
import { Button } from "@/components/ui/button";
import HeroCarousel from "./HeroCarousel";
import { useTranslations } from "next-intl";

function Hero() {
  const t = useTranslations("home");
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
      <div>
        <h1 className="max-w-2xl font-bold text-4xl tracking-tight sm:text-6xl">
          {t("title")}
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-8 text-muted-foreground">
          {t("description")}
        </p>
        <Button asChild size="lg" className="mt-10">
          <Link href="/products">我們的產品</Link>
        </Button>
      </div>
      <HeroCarousel />
    </section>
  );
}
export default Hero;
