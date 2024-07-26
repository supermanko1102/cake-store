import React from "react";
import { Separator } from "@/components/ui/separator";
import { useTranslations } from "next-intl";
function SectionTitle() {
  const t = useTranslations();
  return (
    <div>
      <h2 className="text-3xl font-medium tracking-wider capitalize mb-8">
        {t("home.featured")}
      </h2>
      <Separator />
    </div>
  );
}
export default SectionTitle;
