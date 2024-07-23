import Link from "next/link";
import { Button } from "@/components/ui/button";
import HeroCarousel from "./HeroCarousel";

function Hero() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
      <div>
        <h1 className="max-w-2xl font-bold text-4xl tracking-tight sm:text-6xl">
          風和ふわ家
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-8 text-muted-foreground">
          風和家 Say Cheese
          Cake，承襲日本大阪蛋糕師傅的專業工藝，秉持著對品質與細節的執著，致力於為每一位顧客呈現最純粹的甜點美味。自創立以來，我們堅信，簡單的食材在經過精心的處理與細膩的製作後，能夠綻放出最動人的風味。
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
