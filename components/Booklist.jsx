import { useState, useEffect } from "react";
import React from "react";
import BookCard from "./BookCard";

const Booklist = () => {
  const [bookList, setBookList] = useState([]);

  const getBooks = () => {
    fetch("https://gutendex.com/books/")
      .then((result) => result.json())
      .then((data) => setBookList(data.results))
      .catch((error) => console.warn(error));
  };

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <div className="booklist-wrapper">
      <h2 className="booklist-heading">Fan favorites</h2>
      <div className="booklist">
        {bookList ? (
          bookList.slice(0, 6).map((item, key) => {
            return <BookCard item={item} key={key} />;
          })
        ) : (
          <p>No books to render</p>
        )}
      </div>
    </div>
  );
};

export default Booklist;
