import { HiTranslate } from "react-icons/hi";
import { Button } from "@/components/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function Translate() {
  //Hack
  // const { t, i18n } = useTranslation();

  // const changeLanguage = (lng: string) => {
  //   i18n.changeLanguage(lng);
  // };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <HiTranslate className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 " />

          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem>English</DropdownMenuItem>
        <DropdownMenuItem>中文</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default Translate;
