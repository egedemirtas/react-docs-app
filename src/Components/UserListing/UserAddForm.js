import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const UserAddForm = (props) => {
    const [name, setName] = useState('');
    const [job, setJob] = useState('');

    const onChangeName = (e) => {
        setName(e.target.value)
    }

    const onChangeJob = (e) => {
        setJob(e.target.value)
    }

    const onSubmitUser = (e) => {
        e.preventDefault()
        if (e.target.formBasicName.value === '' || e.target.formBasicJob.value === '') {
            alert('Enter a name and job')
            return
        }
        props.addUser({name: e.target.formBasicName.value, job: e.target.formBasicJob.value})
    }

    return (
        <Card style={{ padding: '1rem', margin: '3rem 0' }}>
            <Card.Body>
                <Card.Title>Add New User</Card.Title>
                <Form onSubmit={onSubmitUser}>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label style={{ float: 'left' }}>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter name" value={name} onChange={onChangeName}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicJob">
                        <Form.Label style={{ float: 'left' }}>Job</Form.Label>
                        <Form.Control type="text" placeholder="Enter job" value={job} onChange={onChangeJob}/>
                    </Form.Group>

                    <Button variant="success" type="submit" style={{ float: 'left' }}>
                        Add
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    )
}

export default UserAddForm