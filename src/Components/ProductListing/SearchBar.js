import Form from 'react-bootstrap/Form';
import React, { useEffect, useState } from 'react';

const SearchBar = (props) => {
    const [text, setText] = useState('');
    const [inStock, setInstock] = useState(false);

    useEffect(() => {
      setText(props.lastSearchedProduct)
      setInstock(props.inStock)
    }, [props.lastSearchedProduct, props.inStock])
    
    
    const onChange = (e) => {
        if (e.target.type === 'checkbox') {
            setInstock(e.target.checked)
            props.filterProducts(text, e.target.checked)
        } else {
            setText(e.target.value)
            props.filterProducts(e.target.value, inStock)
        }
    };
    
    return (
        <Form>
            <Form.Group className="mb-3" controlId="filterProductName">
                <Form.Control className="me-auto" placeholder="Search..." onChange={onChange} value={text}/>
            </Form.Group>
            <Form.Group className="mb-3 d-flex" controlId="filterProductStock">
                <Form.Check type="checkbox" label="Only show products in stock" onChange={onChange} checked={inStock}/>
            </Form.Group>
        </Form>
    )
}

export default SearchBar