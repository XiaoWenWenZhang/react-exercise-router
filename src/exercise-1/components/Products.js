import React from 'react'
import { Route, Switch } from "react-router-dom";
import products from "../../exercise-2/mockups/data.json";
import ProductsList from "./ProductsList";
import ProductDetails from "./ProductDetails";

class Products extends React.Component {
    render() {
        return (
            <div className="page">
                <Switch>
                    <Route exact path="/products">
                        <ProductsList />
                    </Route>
                </Switch>
                {
                    Object.values(products).map(
                        (product) => (
                            <Route key={product.id} path={`/products/${product.id}`}>
                                <ProductDetails {...product}/>
                            </Route>
                        )
                    )
                }
            </div>
        )
    }
}





export default Products;