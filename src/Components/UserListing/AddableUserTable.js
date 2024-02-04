import React from 'react'
import { HomeButton } from '../Layout/HomeButton'
import UserTable from './UserTable'
import UserAddForm from './UserAddForm'
import Container from 'react-bootstrap/Container';

const AddableUserTable = (props) => {
    return (
        <Container style={{ paddingTop: '10rem' }}>
            <h1>Users</h1>
            <UserTable users={props.users} deleteUserByTableId={props.deleteUserByTableId} />
            <UserAddForm addUser={props.addUser} />
            <HomeButton />
        </Container>
    )
}

export default AddableUserTable