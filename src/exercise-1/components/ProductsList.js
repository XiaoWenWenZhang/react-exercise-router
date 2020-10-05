import React from "react";
import { Link } from "react-router-dom";
import products from "../../exercise-2/mockups/data.json";

const ProductsList = () => {
    return (
        <div className="page">
            <h1>All Products</h1>
            {
                Object.values(products).map(
                   ({name, id}) => (
                       <span className="product-name">
                           <Link to={`/products/${id}`} key={id}>
                                {name}
                           </Link>
                           <br/>
                       </span>
                   ) 

                )
            }
        </div>
    )
}

export default ProductsList;