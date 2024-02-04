import React from 'react'
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';
import Table from 'react-bootstrap/Table';

const ProductTable = (props) => {
    const categories = new Map();

    if (props.products !== 'undefined') {
        // sort according to categories
        const sortedProducts = props.products.sort(function (a, b) { return a[0] - b[0]; });

        sortedProducts.forEach(product => {
            // create category if it does not exists yet
            if (!categories.has(product.category)) {
                categories.set(product.category, [])
            }
            // add product
            categories.get(product.category).push(<ProductRow product={product} key={product.name} />)
        })
    }


    return (
        [...categories].map(([category, products]) => (

            <Table striped bordered hover variant="dark" key={category}>
                <ProductCategoryRow categoryName={category} />
                <tbody>
                    {products}
                </tbody>
            </Table >
        ))

    )
}

export default ProductTable