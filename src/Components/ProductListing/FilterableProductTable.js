import React from 'react'
import Container from 'react-bootstrap/Container';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import { HomeButton } from '../Layout/HomeButton';

const FilterableProductTable = (props) => {
  return (
    <Container style={{ paddingTop: '10rem' }}>
      <SearchBar filterProducts={props.filterProducts} lastSearchedProduct={props.lastSearchedProduct} inStock={props.inStock} />
      <ProductTable products={props.products} />
      <HomeButton />
    </Container>
  )
}

export default FilterableProductTable