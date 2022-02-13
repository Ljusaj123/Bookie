import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import BookCard from "../components/BookCard";
import Footer from "../modules/footer/Footer";
import Loading from "../components/Loading";

const Catalog = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchString, setSearchString] = useState("");
  const [pageNum, setPageNum] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const paginationString = `https://gutendex.com/books/?page=${pageNum}&search=${searchString}`;

  const handleSearch = (event) => {
    event.preventDefault();
    setIsLoading(true);
    fetch(`https://gutendex.com/books/?page=1&search=${searchString}`)
      .then((result) => result.json())
      .then((data) => {
        setSearchResults(data.results);
      })
      .catch((error) => console.warn(error))
      .finally(() => {
        setIsLoading(false);
      });
  };

  const baseFetchCall = () => {
    fetch(paginationString)
      .then((result) => result.json())
      .then((data) => {
        if (data.detail === "Invalid page.") {
          setSearchResults([]);
        } else {
          setSearchResults(data.results);
        }
      })
      .catch((error) => console.warn(error))
      .finally(() => {
        setIsLoading(false);
      });
  };

  const paginationToggle = (operator) => {
    switch (operator) {
      case "NEXT_PAGE":
        setPageNum(pageNum + 1);
        break;
      case "PREV_PAGE":
        if (pageNum === 1) {
          break;
        } else {
          setPageNum(pageNum - 1);
        }
        break;
    }
  };

  useEffect(() => {
    baseFetchCall();

    //eslint-disable-next-line
  }, [pageNum]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="catalog-main">
      <Navbar />
      <div className="search-form">
        <form
          onSubmit={(event) => {
            handleSearch(event);
          }}
        >
          <input
            type="text"
            placeholder="search"
            onChange={(e) => {
              setSearchString(e.target.value);
            }}
            value={searchString}
          />
          <button className="search-icon"></button>
        </form>
      </div>
      <div className="search-controls">
        <button
          className="search-controls__left"
          onClick={() => paginationToggle("PREV_PAGE")}
        ></button>
        <button
          className="search-controls__right"
          onClick={() => paginationToggle("NEXT_PAGE")}
        ></button>
      </div>
      <div className="booklist-wrapper">
        <div className="booklist">
          {isLoading ? (
            <Loading />
          ) : searchResults.length > 0 ? (
            searchResults.map((item, key) => {
              return <BookCard item={item} key={key} />;
            })
          ) : (
            <h2>No results</h2>
          )}
        </div>
      </div>
      <div className="search-controls bottom-controls">
        <button
          className="search-controls__left"
          onClick={() => paginationToggle("PREV_PAGE")}
        ></button>
        <button
          className="search-controls__right"
          onClick={() => paginationToggle("NEXT_PAGE")}
        ></button>
      </div>
      <Footer />
    </main>
  );
};

export default Catalog;
