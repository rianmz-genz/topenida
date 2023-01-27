import PageTemplate from "../components/layout/PageTemplate";
import BaliTourSection from "../components/organisms/BaliTourSection";
import Banner from "../components/organisms/Banner";
import Navbar from "../components/organisms/Navbar";
export default function Home() {
  return (
    <PageTemplate title="HomePage">
      <Navbar />
      <Banner />
      <BaliTourSection />
    </PageTemplate>
  );
}
