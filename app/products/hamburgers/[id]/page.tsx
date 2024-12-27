import React from "react";

const Page = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  const response = await fetch(`https://jsonplaceholder.typicode.com/albums`);
  if (!response.ok) throw new Error("Failed to fetch albums");
  const albums = await response.json();
  return (
    <div>
      <h3>Hamburger id: {id}</h3>
      {albums.map((album: { id: number; title: string }) => (
        <div>
          <h3>{album.title}</h3>
          <p className={"text-black text-xl font-bold"}>{album.id}</p>
        </div>
      ))}
    </div>
  );
};

export default Page;
