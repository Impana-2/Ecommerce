import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductsItem from "./ProductsItem";
import "../style/latestCollection.css";

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
  }, [products]);

  return (
    <div className="latest-collection">
      <div className="latest-collection-header">
        <Title text1={"LATEST"} text2={"COLLECTIONS"} />
        <p className="latest-collection-desc">
  Discover what defines true style with Chiguru’s Latest Collection. From flowing fabrics and refined textures to bold details and contemporary cuts, every piece is designed to turn heads. Embrace fashion that feels as good as it looks — elegant, effortless, and uniquely you.
</p>

      </div>
      <div className="latest-products-grid">
        {latestProducts.map((item, index) => (
          <ProductsItem
            key={index}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
            className={index === 0 ? "highlight0" : ""}
          />
        ))}
      </div>
    </div>
  );
};

export default LatestCollection;
