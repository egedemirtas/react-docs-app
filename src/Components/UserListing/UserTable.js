import React from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

const UserTable = (props) => {

  console.log("usert table rrendered")

  const getRows = () => {
    const rows = []

    props.users.forEach((user, key) => {
      rows.push(
        <tr key={key}>
          <td>{key}</td>
          <td>{user.userName}</td>
          <td>{user.userJob}</td>
          <td>
            <Button variant="danger" type="submit" onClick={onClickDeleteUser} value={key}>
              Delete
            </Button>
          </td>
        </tr>
      )
    }
    )

    return rows
  }

  const onClickDeleteUser = (e) => {
    props.deleteUserByTableId(e.target.value)
  }

  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Job</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {getRows()}
      </tbody>
    </Table>
  )
}

export default UserTable