'use client'
import React, { useEffect, useState } from 'react';
import { redirect,useRouter } from "next/navigation";
import useUserStore from '../libs/store';

const Dashboard = async () => {
  const user = useUserStore() // get store
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Replace with your actual Bearer token
    const url = 'http://laravel.local:8081/api/user';

    const fetchData = () => {
      fetch(url, {
        cache: 'no-store',
        method: 'GET', // Replace with the HTTP method you need
        headers: {
          'Authorization': `Bearer ${user.token}`, // Include the Bearer token here
          'Content-Type': 'application/json', // Set the content type if needed
        },
      })
      .then((response) => {
        if (!response.ok) {
          if (response.status === 401 || response.status === 405) {
            // Redirect to the login page if unauthorized (401) or forbidden (403)
            router.push('/login');
          } else {
            throw new Error('Request failed');
          }
        }
        return response.json();
      })
      .then((responseData) => {
        setData(responseData);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setIsLoading(false);
        // You can handle the error here, e.g., set an error state
      });
    };

    fetchData();
  }, []);

  

  console.log(data)

  return (
    <>
    {data.message}

    </>
  );
};

export default Dashboard;
