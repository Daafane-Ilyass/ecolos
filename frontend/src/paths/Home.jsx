import NavBar from "../components/NavBar";
import HeroSection from "../Sections/HeroSection";
import TeamSection from "../Sections/TeamSection";
import NewsSection from "../Sections/NewsSection";
import FrequentlyAskedSection from "../Sections/FrequentlyAskedSection";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <div className="top">
        <NavBar />
        <HeroSection />
      </div>
      <TeamSection />
      <NewsSection />
      <FrequentlyAskedSection />
      <Footer />
    </div>
  );
};

export default Home;
