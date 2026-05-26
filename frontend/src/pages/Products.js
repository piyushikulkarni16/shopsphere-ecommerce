import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/ProductCard.css";

function Products() {

  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const products = [

{
id:1,
name:"Wireless Headphones",
price:"₹2,499",
category:"Electronics",
image:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
},

{
id:2,
name:"Smart Watch",
price:"₹3,999",
category:"Accessories",
image:"https://images.unsplash.com/photo-1523275335684-37898b6baf30"
},

{
id:3,
name:"Running Shoes",
price:"₹1,999",
category:"Fashion",
image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff"
},

{
id:4,
name:"Gaming Mouse",
price:"₹1,299",
category:"Gaming",
image:"https://images.unsplash.com/photo-1527814050087-3793815479db"
},

{
id:5,
name:"Laptop Backpack",
price:"₹1,499",
category:"Bags",
image:"https://images.unsplash.com/photo-1581605405669-fcdf81165afa"
},

{
id:6,
name:"Bluetooth Speaker",
price:"₹2,199",
category:"Electronics",
image:"https://images.unsplash.com/photo-1608043152269-423dbba4e7e1"
},

{
id:7,
name:"DSLR Camera",
price:"₹45,999",
category:"Photography",
image:"https://images.unsplash.com/photo-1516035069371-29a1b244cc32"
},

{
id:8,
name:"Office Chair",
price:"₹6,499",
category:"Furniture",
image:"https://images.unsplash.com/photo-1580480055273-228ff5388ef8"
},

{
id:9,
name:"Mechanical Keyboard",
price:"₹3,299",
category:"Accessories",
image:"https://images.unsplash.com/photo-1511467687858-23d96c32e4ae"
},

{
id:10,
name:"Perfume Set",
price:"₹1,799",
category:"Beauty",
image:"https://images.unsplash.com/photo-1541643600914-78b084683601"
},

{
id:11,
name:"Leather Jacket",
price:"₹4,999",
category:"Fashion",
image:"https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504"
},

{
id:12,
name:"Smartphone",
price:"₹24,999",
category:"Mobiles",
image:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
}

];

const filteredProducts = products.filter((product) =>
product.name.toLowerCase().includes(searchTerm.toLowerCase())
);

const addToCart = (product) => {

  // Get existing cart
  const existingCart =
    JSON.parse(localStorage.getItem("cart")) || [];

  // Add new product
  existingCart.push(product);

  // Save updated cart
  localStorage.setItem(
    "cart",
    JSON.stringify(existingCart)
  );

  // Redirect to cart page
  navigate("/cart");
};

  return (

    <div className="products-page">

      {/* Header */}
      <div className="products-header">

        <h1>
          Explore Products
        </h1>

        <p>
          Discover premium products with modern shopping experience.
        </p>

      </div>

      {/* Search */}
      <div className="search-section">

        <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
        />

      </div>

      {/* Products Grid */}
      <div className="products-grid">

        {filteredProducts.map((product) => (

          <div className="product-card" key={product.id}>

            <div className="product-image">

              <img
                src={product.image}
                alt={product.name}
              />

            </div>

            <div className="product-info">

              <span>
                {product.category}
              </span>

              <h2>
                {product.name}
              </h2>

              <h3>
                {product.price}
              </h3>

              <button onClick={() => addToCart(product)}>
                     Add To Cart
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>

  );
}

export default Products;