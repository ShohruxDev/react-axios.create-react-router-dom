import React, { useEffect, useState } from "react";
import API from "../../API/api";
import "./HomePage.css";
import { useNavigate } from "react-router-dom";
const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState("");
  const [show, setShow] = useState(true);
  const navigate = useNavigate();
  const [count, setCount] = useState(1)
  const limit = 8
  useEffect(() => {
    setLoading(true);
    API.get("/products", {
        params: {limit: limit * count}
    })
      .then((res) => setProducts(res.data.products))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [count]);
  const filterinput = products.filter((pr) =>
    pr.title.toLowerCase().includes(filter.toLowerCase()),
  );
  return (
    <>
      <div className="show-hide">
        <input placeholder="Search"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="inputhome"
          type="text"
        />
        {!show && <button className="btn" onClick={() => setShow(true)}>Show</button>}
        {show && <button className="btn" onClick={() => setShow(false)}>Hide</button>}
      </div>
      {show && (
        <div className="cards">
          {loading && (<span className="loader loading"></span>)}
          {filterinput.map((product) => (
            <li 
              onClick={() => navigate(`/product/${product.id}`)}
              className="li"
              key={product.id}
            >
              <div className="tail">
                <img className="pr-img" src={product.thumbnail} alt="" />
              <p>{product.title}</p>
              </div>
            </li>
          ))}
        </div>
      )}
      {
        products.length > 0 && (<button onClick={() => setCount((prev) => prev + 1)} className="btn btn-more">Show More</button>)
      }
    </>
  );
};

export default HomePage;
