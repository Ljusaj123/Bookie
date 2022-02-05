import { useState } from "react";

const BookCard = ({ item }) => {
  const [readMore, setReadMore] = useState(false);

  const authorsName = item.authors.map((item) => {
    return item.name;
  });
  return (
    <article
      onMouseOver={() => setReadMore(true)}
      onMouseLeave={() => setReadMore(false)}
      className="booklist__card"
    >
      <h2>{readMore ? item.title : `${item.title.slice(0, 30)}...`}</h2>
      <h3>{authorsName}</h3>
      {/* eslint-disable-next-line */}
      <img src={item.formats["image/jpeg"]} alt="" />
      <a href={item.formats["text/html"]} target="_blank" rel="noreferrer">
        Read online
      </a>
    </article>
  );
};

export default BookCard;
