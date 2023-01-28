import Image from "next/image";
import React from "react";
import { FiMenu } from "react-icons/fi";
import Container from "../layout/Container";

const Navbar = () => {
  return (
    <Container>
      <nav className="w-full h-fit flex justify-between items-center pt-6 pb-3 px-4 lg:px-0  text-3xl">
        <Image src="/images/icon.svg" width={150} height={100} alt="favicon" />
        <FiMenu className="text-gray-700" />
      </nav>
    </Container>
  );
};

export default Navbar;
