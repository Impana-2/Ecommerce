import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductsItem from "./ProductsItem";
import "../style/bestSeller.css"; 

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const bestProducts = products.filter((item) => item.bestseller);
    setBestSeller(bestProducts.slice(0, 5));
  }, [products]);

  return (
    <div className="bestseller-container">
      <div className="bestseller-header">
        <Title text1={"BEST"} text2={"SELLERS"} />
       <p className="bestseller-description">
  Own the moment with Chiguru’s Best Sellers — a lineup of confidence-boosting designs that command attention. Meticulously crafted for comfort, quality, and undeniable style, these are the pieces you’ll wear on repeat.
</p>

      </div>
      <div className="bestseller-grid">
        {bestSeller.map((item, index) => (
          <ProductsItem
            key={index}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
