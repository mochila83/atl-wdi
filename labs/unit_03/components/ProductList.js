import React, {Component} from 'react';

import Product from './Product';

class ProductList extends Component {
    render () {
        const ProductList = this.props.productList;

        const productComponents = ProductList.map((product, index) =>{
            return <Product
            productName={product.productName}
            description={product.description}
            price={product.price}
            key={index}/>;
        });

        return (
            <div>
            { productComponents }
            </div>
        );
    }
}

export default ProductList;