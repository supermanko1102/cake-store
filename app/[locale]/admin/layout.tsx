import { Separator } from "@/components/ui/separator";
import Sidebar from "./Sidebar";
import { useTranslations } from "next-intl";

function DashboardLayout({ children }: { children: React.ReactNode }) {
  const t = useTranslations();
  return (
    <>
      <h2 className="text-2xl pl-4">{t("common.dashboard")}</h2>
      <Separator className="mt-2" />
      <section className="grid lg:grid-cols-12 gap-12 mt-12">
        <div className="lg:col-span-2">
          <Sidebar />
        </div>
        <div className="lg:col-span-10 px-4">{children}</div>
      </section>
    </>
  );
}
export default DashboardLayout;
