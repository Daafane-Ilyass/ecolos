/* eslint-disable react/no-unescaped-entities */
import ArticlesGrid from "../components/ArticlesGrid";

import "./NewsSection.css";

const NewsSection = () => {
  return (
    <div className="news-section">
      <h1>Actualités</h1>
      <ArticlesGrid />
    </div>
  );
};

export default NewsSection;
