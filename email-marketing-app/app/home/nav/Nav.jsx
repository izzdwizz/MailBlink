"use client";

import Link from "next/link";
import NavlinkList from "./NavlinkList";
import { useState } from "react";
import { LiaTimesSolid } from "react-icons/lia";
import { RxHamburgerMenu } from "react-icons/rx";
import SignBtn from "./Sign-Btn";

const Nav = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="px-8 md:px-0 py-6">
      <div className="mx-auto max-w-7xl">
        <div className="flex justify-between items-center">
          <Link
            href="/"
            className="font-bold text-2xl md:text-4xl text-[#17181A] font-Roboto"
          >
            MailBlink
          </Link>
          <div
            className="text-3xl md:hidden"
            onClick={() => setOpen((prev) => !prev)}
          >
            <RxHamburgerMenu />
          </div>
          <div className="md:flex hidden items-center space-x-6">
            <NavlinkList />
            <SignBtn />
          </div>
        </div>
        {/* Mobile nav */}
        {open && (
          <div
            className={`
                md:hidden bg-tertiary text-left fixed w-2/3 top-0 bottom-0 py-24 px-4 overflow-y-auto
                 z-50 right-0 opacity-100 transition duration-500`}
          >
            <LiaTimesSolid
              size={35}
              className="absolute top-5 right-5 duration-300"
              onClick={() => setOpen((prev) => !prev)}
            />
            <NavlinkList />
            <div className="mt-12 pl-5 md:pl-0 md:mt-0">
              <SignBtn />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
