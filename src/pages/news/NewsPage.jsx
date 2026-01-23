import React, { useState } from 'react'
import "./NewsPage.css"
import { useStatevalue } from '../../context/Context'
import heart from "../../assets/heart2.png";
import { useNavigate } from 'react-router-dom';
const NewsPage = () => {
  const {wishlist, setWishlist} = useStatevalue()
  const navigate = useNavigate()
  return (
    <>
    <div className="cards">
          {loading && <span className="loader loading"></span>}
          {wishlist.map((product) => (
            <li
              className="li"
              key={product.id}
            >
              <div className="tail">
                <img className='pr-img-2' src={heart} alt="" />
                <img className="pr-img" src={product.thumbnail} alt="" />
                <p>{product.title}</p>
              </div>
            </li>
          ))}
        </div>
        <button onClick={() => navigate('/homepage')} className='btn btnnews'>Go to HomePage</button>
    </>
  )
}

export default NewsPage