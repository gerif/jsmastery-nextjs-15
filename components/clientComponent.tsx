"use client";

import React from "react";
import AnotherServerComponent from "@/components/anotherServerComponent";

const ClientComponent = () => {
  console.log("This is a ClientComponent");
  return (
    <div>
      <h1>This is client component</h1>
      <AnotherServerComponent />
    </div>
  );
};

export default ClientComponent;
