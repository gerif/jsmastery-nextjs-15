import React from "react";

// @ts-ignore
const Page = async ({ params }) => {
  const { id } = await params;
  return (
    <div>
      <h3>Hamburger id: {id}</h3>
    </div>
  );
};

export default Page;
