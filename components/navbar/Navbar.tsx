import Logo from "./Logo";
import LinksDropdown from "./LinksDropdown";
import DarkMode from "./DarkMode";
import CartButton from "./CartButton";
import NavSearch from "./NavSearch";
import { Suspense } from "react";

import Container from "../global/Container";
import Translate from "./Translate";
function Navbar() {
  return (
    <nav className="border-b ">
      <Container className="flex flex-col sm:flex-row  sm:justify-between sm:items-center flex-wrap gap-4 py-8">
        <Logo />
        <Suspense>
          <NavSearch />
        </Suspense>
        <div className="flex gap-4 items-center ">
          <CartButton />
          <DarkMode />
          <Translate />
          <LinksDropdown />
        </div>
      </Container>
    </nav>
  );
}
export default Navbar;
