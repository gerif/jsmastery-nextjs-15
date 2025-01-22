import React from "react";

const Page = async () => {
  const response = await fetch("http://localhost:3000/api/books");
  const books = await response.json();
  return (
    <div>
      <h1 className={"font-space-grotesk text-7xl font-extrabold"}>
        The name of the books WWWW yyyy YYYY
      </h1>
      {books.map((book) => (
        <div key={book.id}>
          <h1 className={"h2-bold"}>{book.name} + my book on my page</h1>
          <h3 className={"font-space-grotesk"}>{book.id}</h3>
        </div>
      ))}
    </div>
  );
};

export default Page;
