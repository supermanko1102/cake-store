"use client";
import { HiTranslate } from "react-icons/hi";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLocale, useTranslations } from "next-intl";
import { useEffect } from "react";

type Language = "en" | "zh-Hant";

function Translate() {
  const t = useTranslations("language");
  const locale = useLocale() as Language;

  useEffect(() => {
    // 在組件加載時檢查並更新 URL
    if (typeof window !== "undefined") {
      const pathname = window.location.pathname;
      if (!pathname.startsWith(`/${locale}`)) {
        window.location.replace(`/${locale}${pathname}`);
      }
    }
  }, [locale]);

  const changeLanguage = (newLocale: Language) => {
    if (newLocale === locale) return;

    // 構建新的 URL
    const currentPath = window.location.pathname;
    let newPath = currentPath;
    if (currentPath.startsWith(`/${locale}`)) {
      newPath = currentPath.replace(`/${locale}`, `/${newLocale}`);
    } else {
      newPath = `/${newLocale}${currentPath}`;
    }

    // 使用 window.location 更改語言，同時保持當前路徑
    window.location.href = newPath;
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <HiTranslate className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 " />
          <span className="sr-only">{t("toggle")}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => changeLanguage("zh-Hant")}>
          {t("chinese")}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeLanguage("en")}>
          {t("english")}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default Translate;
