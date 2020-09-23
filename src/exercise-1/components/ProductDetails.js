import React from 'react';

class ProductDetails extends React.Component {
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
        const id = this.props.match.params.id;
        let product = this.state.products[id - 1];
        return (
            <div>
                <h2>Product Detail:</h2>
                <p>Name: {product.name}</p>
                <p>Id: {product.id}</p>
                <p>Price: {product.price}</p>
                <p>Quantity: {product.quantity}</p>
                <p>Desc: {product.desc}</p>
                <p>URL: /products/{product.id}</p>

            </div>
        )

    }
}

export default ProductDetails;

