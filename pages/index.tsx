import Image from "next/image";
import PageTemplate from "../components/layout/PageTemplate";
import HomeSection from "../components/organisms/HomeSection";
import Banner from "../components/organisms/Banner";
import Navbar from "../components/organisms/Navbar";
import Text from "../components/atoms/Text";
import { useEffect, useState } from "react";
import HomeSkeleton from "../components/organisms/HomeSkeleton";
import Footer from "../components/organisms/Footer";
export default function Home() {
  const [isSkeleton, setIsSkeleton] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => {
      setIsSkeleton(false);
    }, 500);
  }, []);
  return (
    <PageTemplate title="HomePage">
      {/* skeleton */}
      <section
        className={`${
          isSkeleton ? "fixed" : "hidden"
        }  w-full max-w-[470px] bg-white z-50 h-screen top-0 left-1/2 -translate-x-1/2`}
      >
        <HomeSkeleton />
      </section>
      {/* banner or hero section */}
      <Banner />
      {/* card about bali tour */}
      <HomeSection card="tour" title="Best Bali Tour" href="/tour" />
      {/* banner again */}
      <Image
        src="/images/banner2.svg"
        className="w-11/12 mx-auto rounded-lg my-4"
        width={100}
        height={100}
        alt="banner"
      />
      {/* card about explore bali */}
      <HomeSection card="explore" title="Explore Bali" href="/explore" />
      {/* card blogs */}
      <HomeSection card="blog" title="Latests Blog" href="/blog" />
      {/* banner again and again */}
      <Image
        src="/images/banner7.svg"
        className="w-11/12 mx-auto rounded-lg my-4"
        width={100}
        height={100}
        alt="banner"
      />
    </PageTemplate>
  );
}
