import React from "react";

const Page = async () => {
  const response = await fetch("http://localhost:3000/api/books");
  const books = await response.json();
  return (
    <div>
      {books.map((book) => (
        <div key={book.id}>
          <h1>{book.name} + my book on my page</h1>
          <h3>{book.id}</h3>
        </div>
      ))}
    </div>
  );
};

export default Page;
