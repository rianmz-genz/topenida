import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { ReactNode } from "react";

const NavLink = ({ href, children }: NavLinkProps) => {
  const router = useRouter();
  const [isPage, setIsPage] = useState<Boolean>(false);
  return (
    <Link
      href={href}
      className={`${router.pathname == href ? "text-blue" : ""} hover:text-blue`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
