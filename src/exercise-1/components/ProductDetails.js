import React from 'react';

class ProductDetails extends React.Component {
    
    render() {
        const {name, id, price, quantity, desc} = this.props
        return (
            <div className="page">
                <h2>Product Detail:</h2>
                <p>Name: {name}</p>
                <p>Id: {id}</p>
                <p>Price: {price}</p>
                <p>Quantity: {quantity}</p>
                <p>Desc: {desc}</p>
                <p>URL: {`/products/${id}`}</p>
            </div>
        )

    }
}

export default ProductDetails;

