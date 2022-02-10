
import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import BookCard from "../components/BookCard";

const Catalog = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchString, setSearchString] = useState("");
  const [pageNum, setPageNum] = useState(1);

  const paginationString = `https://gutendex.com/books/?page=${pageNum}&search=${searchString}`;

  const handleSearch = (event) => {
    event.preventDefault();
    fetch(`https://gutendex.com/books/?page=1&search=${searchString}`)
      .then((result) => result.json())
      .then((data) => {
        console.log(data);
        setSearchResults(data.results);
      });
  };

  const baseFetchCall = () => {
    fetch(paginationString)
      .then((result) => result.json())
      .then((data) => {
        console.log(data);
        setSearchResults(data.results);
      });
  };

  const paginationToggle = (operator) => {
    switch (operator) {
      case "NEXT_PAGE":
        setPageNum(pageNum + 1);
        console.log(pageNum);
        break;
      case "PREV_PAGE":
        if (pageNum === 1) {
          break;
        } else {
          setPageNum(pageNum - 1);
        }
        console.log(pageNum);
        break;
    }
  };

  useEffect(() => {
    baseFetchCall();
    //eslint-disable-next-line
  }, [pageNum]);

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
              console.log(searchString);
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
          {searchResults ? (
            searchResults.map((item, key) => {
              return <BookCard item={item} key={key} />;
            })
          ) : (
            <h2>No results to show</h2>
          )}
        </div>
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
    </main>
  );
};

export default Catalog;
