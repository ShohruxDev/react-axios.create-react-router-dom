import React, { useEffect, useState } from "react";
import API from "../../API/api";
import "./HomePage.css";
import heart from "../../assets/heart2.png";
import { useNavigate } from "react-router-dom";
import { useStatevalue } from "../../context/Context";
const HomePage = () => {
  const {wishlist, setWishlist, search} = useStatevalue()
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(true);
  const navigate = useNavigate();
  const [count, setCount] = useState(1);
  const [isModalOpen, setisModalOpen] = useState(false);
  const limit = 8;
  useEffect(() => {
    setLoading(true);
    API.get("/products", {
      params: { limit: limit * count },
    })
      .then((res) => setProducts(res.data.products))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [count]);
  const filterinput = products.filter((pr) =>
    pr.title.toLowerCase().includes(search.toLowerCase()),
  );
 const handelWishlist = (product) => {
  setWishlist((prev) => {
    const isSome = prev.some((p) => p.id === product.id);

    if (isSome) {
      return prev.filter((item) => item.id !== product.id);
    } else {
      return [...prev, product];
    }
  });
};

  return (
    <>
      <div className="show-hide">
      
       
        {!show && (
          <button className="btn" onClick={() => setShow(true)}>
            Show
          </button>
        )}
        {show && (
          <button className="btn" onClick={() => setShow(false)}>
            Hide
          </button>
        )}
      </div>
      {show && (
        <div className="cards">
          {loading && <span className="loader loading"></span>}
          {filterinput.map((product) => (
            <li
              onClick={() => navigate(`/product/${product.id}`)}
              className="li"
              key={product.id}
            >
              <div className="tail">
                <div>
                  <img
                    onClick={(e) => {
                      (e.stopPropagation(), handelWishlist(product));
                    }}
                    className="pr-img-2"
                    src={heart}
                    alt="heart-image"
                  />
                </div>
                <img className="pr-img" src={product.thumbnail} alt="" />
                <p>{product.title}</p>
              </div>
            </li>
          ))}
        </div>
      )}
      {products.length > 0 && (
        <button
          onClick={() => setCount((prev) => prev + 1)}
          className="btn btn-more"
        >
          Show More
        </button>
      )}
    </>
  );
};

export default HomePage;
