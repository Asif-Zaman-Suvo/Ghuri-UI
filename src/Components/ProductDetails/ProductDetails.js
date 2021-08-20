import { Button } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../Header/Header';

const ProductDetails = () => {

    const { productID } = useParams();
    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch(`https://dev.api.ghuribazar.com/api/v1/store/product/details?product_id=${productID}`)
            .then((result) => {
                result.json()
                    .then((resp) => {
                        setProduct(resp.product);
                        console.log(resp.product);
                    })
            })
    }, [productID])

    return (
        <div>
            <Header></Header>

            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-9">
                        <div className="row">
                            <div className="col-md-7">
                                <img style={{ width: '100%' }} alt="" src={product.productThumbnailImage}></img>
                            </div>
                            <div className="col-md-5">
                                <h4>{product.productTitle}</h4>
                                <p style={{ fontSize: "20px" }}>BRAND: {product.brandName} </p>
                                <p style={{ fontSize: "20px" }}>Sold By: {product?.productShop?.[0].shopName}</p>
                                <div className="row">
                                    <div className="col"><p style={{ fontSize: "30px", color: '#FF7F7F', textDecoration: "line-through" }}>৳{product.productMRP}</p>
                                    </div>
                                    <div className="col">
                                        <span style={{ fontSize: "30px", color: 'red' }}>{product.productDiscountPercentage}%</span>
                                    </div>

                                </div>

                                <div className="price">
                                    <h1 style={{ fontSize: "50px" }}>৳{product.productDiscountPrice}</h1>

                                </div>

                                <div className="row price-button mt-5">
                                    <div className="col">
                                        <Button variant='outline-success'>Add To Cart</Button>
                                    </div>
                                    <div className="col">
                                        <Button variant='outline-danger'>Buy Now</Button>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                    <div className="col-md-3">

                    </div>

                </div>

            </div>





        </div>
    );
};

export default ProductDetails;