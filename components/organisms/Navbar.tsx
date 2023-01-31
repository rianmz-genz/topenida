import Image from "next/image";
import React from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Container from "../layout/Container";
import { useState } from "react";
import NavLink from "../molecules/NavLink";
import { useRouter } from "next/router";
import Link from "next/link";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const router = useRouter();
  return (
    <Container>
      <nav
        className={`w-full h-fit  absolute z-20 top-0 left-1/2 -translate-x-1/2 max-w-[470px] bg-white  pt-4  ${isOpen ? "pb-5": "pb-3"} px-4 text-3xl`}
      >
        <div className="justify-between items-center flex">
          <Link href={"/"}>
            <Image
              src="/images/icon.svg"
              width={150}
              height={100}
              alt="favicon"
            />
          </Link>

          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <FiX className="text-blue" />
            ) : (
              <FiMenu className="text-gray-700" />
            )}
          </button>
        </div>
        <ul
          className={`w-full h-fit text-xl pt-6 space-y-4 pb-8 transition-all duration-300 ${
            isOpen ? "visible" : "invisible hidden"
          }`}
        >
          <li>
            <NavLink href="/">Home Page</NavLink>
          </li>
          <li>
            <NavLink href="/tour">Bali Tours</NavLink>
          </li>
          <li>
            <NavLink href="/explore">Culture Tours</NavLink>
          </li>
          <li>
            <NavLink href="/blog">Blogs</NavLink>
          </li>
          <li>
            <NavLink href="/us">Contact Us</NavLink>
          </li>
        </ul>
      </nav>
    </Container>
  );
};

export default Navbar;
