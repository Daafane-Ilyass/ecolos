import { useState } from "react";
import Accordion from "../components/Accordion";
import "./FrequentlyAskedSection.css";

const FrequentlyAskedSection = () => {
  const faqq = [
    {
      id: 1,
      question: "Qu'est-ce que le club ECOLOS ?",
      answer:
        "Le club ECOLOS est une organisation dédiée à l'étude, à la promotion et à la protection de l'environnement ainsi qu'à l'énergie renouvelable. Il s'adresse aux étudiants spécialisés en génie de l'environnement et des énergies renouvelables.",
    },
    {
      id: 2,
      question: "Quels sont les objectifs du club ECOLOS ?",
      answer:
        "Les objectifs du club ECOLOS sont de sensibiliser les étudiants à l'importance de la durabilité environnementale, de promouvoir l'utilisation des énergies renouvelables et de mener des projets visant à protéger l'environnement.",
    },
    {
      id: 3,
      question: "Comment puis-je rejoindre le club ECOLOS ?",
      answer:
        "Pour rejoindre le club ECOLOS, vous pouvez assister aux séances d'information en début d'année universitaire, consulter notre site web ou contacter les responsables du club. Tous les étudiants en génie de l'environnement et des énergies renouvelables sont les bienvenus.",
    },
    {
      id: 4,
      question: "Quel type d'activités le club ECOLOS organise-t-il ?",
      answer:
        "Le club ECOLOS organise diverses activités telles que des conférences sur les énergies renouvelables, des ateliers de sensibilisation à la protection de l'environnement, des sorties sur le terrain pour étudier des écosystèmes locaux, et des projets de développement durable.",
    },
    {
      id: 5,
      question: "Quels avantages ai-je en tant que membre du club ECOLOS ?",
      answer:
        "En tant que membre du club ECOLOS, vous bénéficiez d'un accès à des connaissances spécialisées, à des opportunités de réseautage avec des professionnels du secteur, à des expériences pratiques enrichissantes sur le terrain et à la satisfaction de contribuer activement à la préservation de l'environnement.",
    },
    {
      id: 6,
      question:
        "Comment le club ECOLOS contribue-t-il à la communauté universitaire ?",
      answer:
        "Le club ECOLOS joue un rôle actif en sensibilisant la communauté universitaire aux problématiques environnementales actuelles, en organisant des campagnes de nettoyage, des séminaires sur la durabilité et en collaborant avec d'autres clubs et organisations partageant les mêmes valeurs.",
    },
    {
      id: 7,
      question:
        "Est-ce que le club ECOLOS collabore avec des entreprises ou des experts externes ?",
      answer:
        "Oui, le club ECOLOS cherche activement à établir des partenariats avec des entreprises, des experts et des chercheurs travaillant dans le domaine de l'environnement et des énergies renouvelables. Ces collaborations enrichissent les connaissances des membres et offrent des opportunités concrètes.",
    },
    {
      id: 8,
      question:
        "Comment les membres du club s'engagent-ils dans la protection de l'environnement ?",
      answer:
        "Les membres du club ECOLOS s'engagent dans la protection de l'environnement en participant à des initiatives de reboisement, de sensibilisation dans les écoles locales, de promotion de l'utilisation du vélo et d'autres activités visant à réduire l'empreinte écologique.",
    },
  ];

  const [active, setActive] = useState(faqq[0].question);

  return (
    <div className="faq">
      <h1>Questions Fréquemment Posées</h1>
      {faqq.map((obj) => (
        <Accordion
          key={obj.id}
          question={obj.question}
          active={active}
          setActive={setActive}
          answer={obj.answer}
        />
      ))}
    </div>
  );
};

export default FrequentlyAskedSection;
