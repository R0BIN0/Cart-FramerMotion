// General

import { useState } from "react";
import { Link } from "react-router-dom";

// Data

import productData from "../../Data/ProductData";

export default function Home() {
  return (
    <>
      <h1>hello</h1>
      <p>other</p>
      {productData.map((item, i) => (
        <>
          <h1 key={i}>{item.name}</h1>
          <Link to={`/product/${item.id}`}>ALLER VOIR</Link>
        </>
      ))}
    </>
  );
}
