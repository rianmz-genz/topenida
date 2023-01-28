import Image from "next/image";
import PageTemplate from "../components/layout/PageTemplate";
import HomeSection from "../components/organisms/HomeSection";
import Banner from "../components/organisms/Banner";
import Navbar from "../components/organisms/Navbar";
import Text from "../components/atoms/Text";
export default function Home() {
  return (
    <PageTemplate title="HomePage">
      <Navbar />
      <Banner />
      <HomeSection card="tour" title="Best Bali Tour" href="/tour" />
      <Image
        src="/images/banner2.svg"
        className="w-11/12 mx-auto rounded-lg my-4"
        width={100}
        height={100}
        alt="banner"
      />
      <HomeSection card="explore" title="Explore Bali" href="/explore" />
      <HomeSection card="blog" title="Latests Blog" href="/blog" />
      <Image
        src="/images/banner7.svg"
        className="w-11/12 mx-auto rounded-lg my-4"
        width={100}
        height={100}
        alt="banner"
      />
      <Text textStyle="Footer" value="Copyright &#169; 2023 - Develop By Adrian" />
    </PageTemplate>
  );
}
