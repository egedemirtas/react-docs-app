import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FilterableProductTable from './Components/ProductListing/FilterableProductTable';
import { Link } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import React, { useEffect, useState, useMemo } from 'react';
import AddableUserTable from './Components/UserListing/AddableUserTable';

function App() {

  const [products, setProducts] = useState([]);
  const [lastSearchedProduct, setLastSearchedProduct] = useState('');
  const [inStock, setInstock] = useState(false);
  const [users, setUsers] = useState(new Map());
  const [userTableId, setUserTableId] = useState(0);

  const PRODUCTS = useMemo(() => [
    { category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football' },
    { category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball' },
    { category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball' },
    { category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch' },
    { category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5' },
    { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' }
  ], []);

  useEffect(() => {
    setProducts(PRODUCTS)
  }, [PRODUCTS]);

  const filterProducts = (text, isInStock) => {
    if (text === '' && !isInStock) {
      setProducts(PRODUCTS)
    } else {
      const x = []
      PRODUCTS.forEach((product) => {
        if (isInStock) {
          if (product.stocked && (product.name === text || text === '')) {
            x.push(product);
          }
        } else if (product.name === text || text === '') {
          x.push(product);
        }
      })
      setProducts(x)
    }
    setLastSearchedProduct(text)
    setInstock(isInStock)
  }



  const addUser = (user) => {
    users.set(userTableId, { userName: user.name, userJob: user.job })
    setUsers(users)
    const newId = userTableId + 1;
    setUserTableId(newId)
  }

  const deleteUserByTableId = (id) => {
    const userMap = new Map(users)
    userMap.delete(Number(id)) 
    setUsers(userMap)
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={
            <Container>
              <img src={logo} className="App-logo" alt="logo" />
              <ListGroup>
                <Link to='/filterableProductTable' style={{ textDecoration: 'none', color: '#000' }}>
                  <ListGroup.Item action variant="secondary">
                    Product Listing
                  </ListGroup.Item>
                </Link>
                <Link to='/addableUserTable' style={{ textDecoration: 'none', color: '#000' }}>
                  <ListGroup.Item action variant="secondary">
                    User Listing
                  </ListGroup.Item>
                </Link>
              </ListGroup>
            </Container>
          } />
          <Route path='/filterableProductTable' element={<FilterableProductTable products={products} filterProducts={filterProducts} lastSearchedProduct={lastSearchedProduct} inStock={inStock} />}></Route>
          <Route path='/addableUserTable' element={<AddableUserTable users={users} addUser={addUser} deleteUserByTableId={deleteUserByTableId}/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
