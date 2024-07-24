import React from "react";
import { Button } from "../ui/button";
import { SiPronounsdotpage } from "react-icons/si";
import Link from "next/link";
import { Icon } from "@radix-ui/react-select";
function Logo() {
  return (
    <Button size="icon" asChild>
      <Link href="/">
        <SiPronounsdotpage className="w-6 h-6" />
      </Link>
    </Button>
  );
}

export default Logo;
