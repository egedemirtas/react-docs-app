import React from 'react'


const ProductCategoryRow = (props) => {
    return (
        <thead>
            <tr>
                <th colSpan={2}>{props.categoryName}</th>
            </tr>
            <tr>
                <th>Name</th>
                <th>Price</th>
            </tr>
        </thead>
    )
}

export default ProductCategoryRow