import React from 'react'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

export const HomeButton = () => {
  return (
    <Link to='/' style={{ float: 'right', textDecoration: 'none', color:'#000'}}><Button variant="info">Back to Main Page</Button></Link>
  )
}
