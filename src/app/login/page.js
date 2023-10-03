'use client'
import React, { useState } from 'react';
import { Form, Button, Card, Row, Col, CardFooter, CardBody } from 'react-bootstrap';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here, e.g., sending a request to your backend

    // For this example, we'll just display the input values
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="container mt-5 col-8">

      <Card>
        <Card.Header><h1>Login Page</h1></Card.Header>
        <CardBody>
          
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="email" className='mb-3'>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="password" className='mb-1'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>

      </Form>

        </CardBody>
        <CardFooter>
          <Button variant="primary" type="submit">
            Login
          </Button>
          {' '}
          <Button variant="warning" type="reset">
            Reset
          </Button>
        </CardFooter>
      </Card>
    
    </div>
  );
};

export default LoginPage;
