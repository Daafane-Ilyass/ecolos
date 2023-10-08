import { useState, useRef, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { Toast } from "primereact/toast";
import Loader from "./Loader";

import "./ArticlesGrid.css";
import { listArticles } from "../actions/homeActions";

const ArticlesGrid = () => {
  const initialArticlesToShow = 6;
  const articlesPerPage = 3;
  const toast = useRef(null);

  const dispatch = useDispatch();

  const articlesList = useSelector((state) => state.articleList);
  const { loading, error, articles } = articlesList;

  const [articlesToShow, setArticlesToShow] = useState(initialArticlesToShow);
  // const [articles, setArticles] = useState([]);
  const [showButton, setShowButton] = useState(true);

  const showError = () => {
    toast.current.show({
      severity: "error",
      summary: "Error",
      detail: error,
      life: 3000,
    });
  };

  useEffect(() => {
    dispatch(listArticles());
  }, [dispatch]);

  const handleLoadMore = () => {
    setShowButton(false);
    setArticlesToShow((prev) => prev + articlesPerPage);
  };

  const handleAnimationEnd = () => {
    setShowButton(true);
  };
  return (
    <div className="articles-grid">
      <Toast ref={toast} />
      {loading ? (
        <Loader />
      ) : error ? (
        showError()
      ) : (
        <div className="cards">
          {articles.slice(0, 6).map((article) => (
            <div key={article._id} className="card showed">
              <div className="container">
                <img src={article.articleImageURL} alt="" />
              </div>
              <div className="details">
                <h3>{article.title}</h3>
                <p>{article.description}</p>
                <a href={article.articleURL} target="blank">
                  Learn more
                </a>
              </div>
            </div>
          ))}
          {articles.slice(6, articlesToShow).map((article) => (
            <div
              key={article.id}
              className={`card ${
                articlesToShow >= articlesPerPage ? "show" : ""
              }`}
              onAnimationEnd={handleAnimationEnd}
            >
              <div className="container">
                <img src={article.articleImageURL} alt="" />
              </div>
              <div className="details">
                <h3>{article.title}</h3>
                <p>{article.description}</p>
                <a href={article.articleURL} target="blank">
                  Learn more
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
      {showButton && articles.length > articlesToShow && (
        <div className="load-more-button-container">
          <button className="load-more-button" onClick={handleLoadMore}>
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default ArticlesGrid;
