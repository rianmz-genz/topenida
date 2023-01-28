import Image from "next/image";
import PageTemplate from "../components/layout/PageTemplate";
import HomeSection from "../components/organisms/HomeSection";
import Banner from "../components/organisms/Banner";
import Navbar from "../components/organisms/Navbar";
import Text from "../components/atoms/Text";
import { useEffect, useState } from "react";
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
      <div
        className={`${
          isSkeleton ? "fixed" : "hidden"
        }  w-full max-w-[470px] bg-white z-50 h-screen top-0 left-1/2 -translate-x-1/2`}
      >
        <div className="w-full flex justify-between px-4 mt-6 pt-2">
          <div className="bg-slate-300  animate-pulse w-4/12 h-8 rounded-full"></div>
          <div className="bg-slate-300  animate-pulse w-8 h-8 rounded-full"></div>
        </div>
        <div className="mt-8 pt-2 px-4">
          <div className="w-full bg-slate-300 h-56 animate-pulse rounded-lg"></div>
        </div>
        <div className="w-full flex justify-between px-4 mt-6">
          <div className="bg-slate-300  animate-pulse w-4/12 h-8 rounded-full"></div>
          <div className="bg-slate-300  animate-pulse w-2/12 h-8 rounded-full"></div>
        </div>
        <div className="w-full px-4 mt-3 grid grid-cols-2 gap-3">
          <div className="w-full h-72 bg-slate-300 animate-pulse rounded-lg"></div>
          <div className="w-full h-72 bg-slate-300 animate-pulse rounded-lg"></div>
        </div>
        <div className="mt-8 pt-2 px-4">
          <div className="w-full bg-slate-300 h-56 animate-pulse rounded-lg"></div>
        </div>
        <div className="w-full flex justify-between px-4 mt-6">
          <div className="bg-slate-300  animate-pulse w-4/12 h-8 rounded-full"></div>
          <div className="bg-slate-300  animate-pulse w-2/12 h-8 rounded-full"></div>
        </div>
      </div>
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
      {/* footer */}
      <Text
        textStyle="Footer"
        value="Copyright &#169; 2023 - Develop By Adrian"
      />
    </PageTemplate>
  );
}
