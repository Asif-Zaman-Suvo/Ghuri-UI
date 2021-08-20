import React, { useEffect, useState } from 'react';
import MainContent from '../MainContent/MainContent';

const Main = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://dev.api.ghuribazar.com/api/v1/store/shop/products?shop_id=GBS71278&page=1&size=1000')
            .then((result) => {
                result.json()
                    .then((resp) => {
                        setProducts(resp.products);
                        // console.log(resp.products)
                    })
            })

    }, [])
    return (
        <div className="container">
            <h3 className="mt-5 mb-5">All Products</h3>
            <div className="row">

                {
                    products.map(item => <MainContent item={item}></MainContent>)
                }
            </div>


        </div>

    );
};

export default Main;