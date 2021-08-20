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
                    })
            })


    }, [])



    return (

        
        <div>
            <Header></Header>

          <h1>{product.productTitle}</h1>
          <img alt="" src={product.productThumbnailImage}></img>



        </div>
    );
};

export default ProductDetails;