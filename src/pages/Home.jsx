import React, { useState, useEffect } from "react";
import { PacmanLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()
  useEffect(() => {
    setLoading(true);
    fetch("https://strapi-store-server.onrender.com/api/products")
      .then((response) => {
        if (response.status == 200) {
          return response.json();
        }
      })
      .then((data) => {
        setProducts(data.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  function handHome(event) {
    event.preventDefault();
    navigate('/home')
  }
  function handLogOut(event) {
    event.preventDefault();
    navigate('/login')
  }

  return (
    <div className="base-container flex flex-wrap gap-5 justify-center">
      {loading && <PacmanLoader color="yellow" className="mt-12" />}
      {!loading && (
        <div className=" base-container p-5 rounded-md scroll-mb-2 flex  bg-purple-700 w-full justify-between">
          <button onClick={handHome} className="btn btn-accent">
          Home
        </button>
        <button onClick={handLogOut} className="btn btn-accent">
          Log out
        </button>
        </div>
      )}
      {products.length > 0 &&
        products.map((product) => {
          return (
            <div onClick={() => {handDetails(product.id);}} key={product.id}className="border w-56 p-2 shadow-md">
              <img
                className="w-56 h-56"
                src={product.attributes.image}
                alt=""
              />
              <h2 className="text-center text-purple-600 text-2xl font-bold pb-2">
                {product.attributes.title}
              </h2>
              <h3 className="text-center ">${product.attributes.price}</h3>
            </div>
          );
        })}
    </div>
  );
}

export default Home;
