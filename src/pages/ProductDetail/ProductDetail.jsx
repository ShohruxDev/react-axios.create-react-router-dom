import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import API from "../../API/api";
import "./ProductDetail.css";
const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    setLoading(true);
    API.get(`/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [id]);
  if (!product) return <span className="loader loading"></span>;
  return (
    <>
      {loading && <p>Loading...</p>}
      <div className="d-card">
        <div className="detail">
          <img src={product.thumbnail} alt="" />
          <div className="detail-p">
            <p>{product.title}</p>
            <button onClick={() => navigate(`/homepage`)} className="btn">
              Go to HomePage
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
