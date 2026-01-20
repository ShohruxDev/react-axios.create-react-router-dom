import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import API from "../../API/api";
import "./ProductDetail.css";
import ModallWrapper from "../../components/ModallWrapper/ModallWrapper";
const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isproductDetailModalOpen, setisproductDetailModalOpen] =
    useState(false);
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
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
              }}
            >
              {isproductDetailModalOpen && <ModallWrapper open={isproductDetailModalOpen} onClose={() => setisproductDetailModalOpen((p) => !p)}><div className="detail-modal"><img src={product.thumbnail} alt="" />
              <p>{product.title}</p>
              <button style={{
                width:'100%'
              }} onClick={() => setisproductDetailModalOpen(false)} className="btn">Close</button></div>
              </ModallWrapper>}
              <button onClick={() => navigate(`/homepage`)} className="btn">
                Go to HomePage
              </button>
              <button onClick={() => setisproductDetailModalOpen(true)} className="btn">ProductDetailModalOpen</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
