'use client'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { Form, Button, Card, CardFooter, CardBody, Alert } from 'react-bootstrap';
import useUserStore from '../libs/store';

const LoginPage = () => {
  //const user = useUserStore() // get store
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    //const url = 'http://laravel.local:8000/api/login';
    const url = `${process.env.SERVER_URL}:${process.env.SERVER_PORT}/api/login`;


    // Create a request body with your login data
    const requestBody = JSON.stringify({ email, password });
  
    try {
      setError(null);
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: requestBody,
      });
  
      if (!response.ok) {
        throw new Error(`HTTP Error! Status: ${response.status}`);
      }
  
      // Assuming your server sends a JSON response
      const responseData = await response.json();
  
      // Handle the response data here (e.g., store tokens, display messages)
      console.log('Response:', responseData);

      // Save the token to state management
      useUserStore.setState({ 
          loggedIn: true,
          token: responseData.token,
          email: email
         })

         useUserStore.setState({ 'id' : 'azril.nazli@gmail.com' })

      // redirect to /dashboard
      router.push("/account")

    } catch (error) {
      setError('Login failed. Please check your credentials.');

      // Hide the error message after 3 seconds
      setTimeout(() => {
        setError(null);
      }, 3000);
      console.error('Error:', error);
    }
  };

  return (
    <div className="container mt-5 col-8">


    <Form onSubmit={handleSubmit}>

      {/* Display error message */}
      {error && (
          <Alert variant={'danger'}>
            {error}
          </Alert>
      )}
      <Card>
        <Card.Header><h1>Login Page</h1></Card.Header>
        <CardBody>
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
      </Form>
    </div>
  );
};

export default LoginPage;
