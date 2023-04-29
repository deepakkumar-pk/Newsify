import React, { useState, useEffect, useCallback } from "react";
import NewsItems from "./NewsItems";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [category] = useState(props.category);

  const handlePrevClick = useCallback(() => {
    if (page > 1) {
      setPage(page - 1);
    }
  }, [page]);

  const handleNextClick = useCallback(() => {
    const pageSize = 5; // number of articles to show per page
    let totalArticles = articles.length;
    const totalPages = Math.ceil(totalArticles / pageSize);
    if (page < totalPages) {
      setPage(page + 1);
    }
  }, [articles, page]);

  useEffect(() => {
    const fetchData = async () => {
      //let url = `https://newsdata.io/api/1/news?country=pk&category=${category}&apikey=pub_213749158965571c84282652f3ff0d8193567`;
      //let url = `https://gnews.io/api/v4/top-headlines?category=${category}&lang=en&country=pk&max=10&apikey=f707be8706c67b9934b84813422db66e`;
      let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=d8dc8b0b29f4450eaf89b99ab99b707d`;
      let data = await fetch(url);
      let parseData = await data.json();
      console.log(parseData);
      if (parseData.articles) {
        setArticles(parseData.articles);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [category]);
  //console.log(articles)
  const pageSize = 5; // number of articles to show per page
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  let totalArticles = articles.length;

  const totalPages = Math.ceil(totalArticles / pageSize);

  return (
    <>
      <div className="container text-center my-3">
        <h2>Newsify - Top Headlines</h2>
        {isLoading ? ( // show spinner if data is loading
          <div className="spinner-border" role="status">
            <span className="sr-only"></span>
          </div>
        ) : (
          <>
            <div className="row row-cols-2 row-cols-lg-5 g-2 g-lg-3 my-3">
              {articles.slice(startIndex, endIndex).map((element) => {
                return (
                  <div className="col">
                    <div className="p-8">
                      <NewsItems
                        title={element.title}
                        description={element.description}
                        imageUrl={element.urlToImage}
                        newsUrl={element.url}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="container d-flex justify-content-between">
              <button
                type="button"
                className="btn btn-dark"
                onClick={handlePrevClick}
                disabled={page === 1}
              >
                &larr; Prev
              </button>
              <button
                type="button"
                className="btn btn-dark"
                onClick={handleNextClick}
                disabled={page === totalPages}
              >
                Next &rarr;
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};
export default News;
