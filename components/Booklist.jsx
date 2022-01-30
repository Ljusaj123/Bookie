// import { useState, useEffect } from "react";
import React from "react";

const Booklist = () => {
  const [bookList, setBookList] = useState([]);

  const getUsers = async () => {
    const mojApiPoziv = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );
    const mojRezultat = await mojApiPoziv.json();
    setBookList(mojRezultat);
    console.log(mojRezultat);
    return mojRezultat;
  };

  useEffect(() => {
    getUsers();
  }, []);

  return <div></div>;
};

export default Booklist;
