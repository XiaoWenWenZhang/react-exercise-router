import React from 'react'
import { Link } from "react-router-dom";


class Products extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [{
                id: 1,
                name: 'Bicycle',
                price: 30,
                quantity: 15,
                desc: 'Bicycle is Good'
            },
            {
                id: 2,
                name: 'TV',
                price: 40,
                quantity: 16,
                desc: 'TV is Good'
            },
            {
                id: 3,
                name: 'Pencil',
                price: 50,
                quantity: 17,
                desc: 'Pencil is Good'
            }
            ]
        }
    }


    render() {
        return (
            <div>
                <h1>All Products:</h1>

                <ul>
                {
                    this.state.products.map(item => (
                        <li key={item.id}>
                            <Link
                                to={`/ProductDetails/${item.id}`}>
                                {item.name}</Link>
                        </li>
                    ))
                }
            </ul>
            </div>
        )
    }
    routerTo(item) {
        this.props.history.push({ pathname: `/productDetails/${item.id}`, state: { data: item } })
    }
}





export default Products;