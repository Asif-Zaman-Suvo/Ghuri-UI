import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./MainContent.css"

const MainContent = ({ item }) => {
  console.log(item);

  return (
  
    <div className="col-md-3 mb-5">
      <Link style={{textDecoration:'none',color:'black'}} to={`/productDetails/${item.productID}`}>
        <Card className="product-card" style={{ width: '16rem', backgroundColor: '#FFFFFF', border: "none", borderRadius: "10px" }}>
          <Card.Img variant="top" style={{ width: "100%", padding: "8px" }} src={item.productThumbnailImage} />
          <Card.Body>
            <Card.Text>
              <div className="text-single-product">
                <p style={{ marginBottom: "0px", lineHeight: "17px", fontSize: "14px" }}>{item.productTitle}</p>
              </div>
            </Card.Text>
            <div className="price-area">
              <h6 className="price-single-product">
                <span className="price-single-line">৳{item.productMRP}</span>
                <span className="discount-percentage">{item.productDiscountPercentage}%</span>
              </h6>
            </div>
            <div className="main-prize-single-product">
              <h3>৳{item.productDiscountPrice}</h3>
            </div>
          </Card.Body>
        </Card>
      </Link>
    </div>

  );
};

export default MainContent;