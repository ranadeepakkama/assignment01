import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../CartReducer";
import Navbar from "../Navbar/navbar";
import './index.css'
import { useState } from "react";

const products = [
    { id: 1, image: "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-1200,fo-auto/65d85d0d02d8dc3ec1b5b90d/cat_img/Samsung_Galaxy_S24_Ultra_Back_Cover__Kickstand_Lightweight_Case__Black__VMD67KNZUC_2024-12-27_1.jpg", caseDetails: "Samsung Galaxy S24 Ultra Back Cover-Quilted Classic Plain Leather Craft Case (Grey)", productName: "Samsung Galaxy S24 Ultra" },
    { id: 2, image: "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-1200,fo-auto/65d85d0d02d8dc3ec1b5b90d/cat_img/Samsung_Galaxy_S24_Ultra_Back_Cover__Kickstand_Lightweight_Case__Black__VMD67KNZUC_2024-12-27_1.jpg", caseDetails: "Samsung Galaxy S24 Ultra Back Cover-Quilted Classic Plain Leather Craft Case (Grey)", productName: "Samsung Galaxy S24 Ultra" },
    { id: 3, image: "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-1200,fo-auto/65d85d0d02d8dc3ec1b5b90d/cat_img/Samsung_Galaxy_S24_Ultra_Back_Cover__Kickstand_Lightweight_Case__Black__VMD67KNZUC_2024-12-27_1.jpg", caseDetails: "Samsung Galaxy S24 Ultra Back Cover-Quilted Classic Plain Leather Craft Case (Grey)", productName: "Samsung Galaxy S24 Ultra" },
    { id: 4, image: "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-1200,fo-auto/65d85d0d02d8dc3ec1b5b90d/cat_img/Samsung_Galaxy_S24_Ultra_Back_Cover__Kickstand_Lightweight_Case__Black__VMD67KNZUC_2024-12-27_1.jpg", caseDetails: "Samsung Galaxy S24 Ultra Back Cover-Quilted Classic Plain Leather Craft Case (Grey)", productName: "Samsung Galaxy S24 Ultra" }
];

const Home = () => {
  const dispatch = useDispatch();
  const [popup, setPopup] = useState(false);
  
  const handleAddToCart = (item) => {
    dispatch(addToCart(item)) 
    setPopup(true); 

    setTimeout(() => {
      setPopup(false);
    }, 2000);
  }
  return (
    <div>
      <Navbar />
      {popup && <div className="popup">Item added to cart!</div>}

      <div className="carousel-container">
                <div style={{borderRadius:'8px'}} id="carouselExampleIndicators" className="carousel slide">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                        <img src="https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-1600,fo-auto/65d85d0d02d8dc3ec1b5b90d/template/1725875268360_PRC8CEGKZR_2024-09-09_2.jpg" className="d-block w-100" alt="img1"/>
                        </div>
                        <div className="carousel-item">
                        <img src="https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-1600,fo-auto/65d85d0d02d8dc3ec1b5b90d/template/1725875268360_IY3JUKZXWE_2024-09-09_1.jpg" className="d-block w-100" alt="img2"/>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                    </div>
      </div>
            <div>
                <h2>Products</h2>
                    <div className="cart-list">
                        {products.map((item) => (
                        <div key={item.id} className="cart-item">
                            <img className="img" src={item.image} alt={item.name} />
                            <div>
                                <p>{item.caseDetails}</p>
                                <h3>{item.productName}</h3>
                            </div>
                            <button className="btn btn-outline-secondary" onClick={() => handleAddToCart(item)}>Add to Cart</button>
                        </div>
                        ))}
                    </div>
                </div>
    </div>
  );
};

export default Home;
