/* eslint-disable react/no-unescaped-entities */
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <h1>
        CLUB <span>ECOLOS</span>
      </h1>
      <p>
        On forme des ingénieurs capables de comprendre les enjeux liés à
        l'environnement et à l'utilisation des énergies renouvelables, ainsi que
        les moyens de les utiliser de manière efficace. Les étudiants apprennent
        à utiliser les connaissances en matière de sciences, de mathématiques et
        de technologie pour résoudre les problèmes environnementaux et
        énergétiques.
      </p>
      <button className="hero-btn">En savoir plus</button>
    </div>
  );
};

export default HeroSection;
