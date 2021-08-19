import React, { useEffect, useState } from 'react';
import MainContent from '../MainContent/MainContent';

const Main = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://dev.api.ghuribazar.com/api/v1/store/shop/products?shop_id=GBS71278&page=1&size=1000')
            .then((result) => {
                result.json()
                .then((resp) => {
                    // console.log("result", resp);
                    setData(resp)
                })
            })

    }, [])

    console.log(data)


    return (
        <div className="container">
            <div className="row">
            {
                Object.keys(data).map(item => <MainContent item={item}></MainContent>)
               
            }
            </div>
           

        </div>

    );
};

export default Main;