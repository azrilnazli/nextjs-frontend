const Home = async () => {
  try {
    const res = await fetch("http://laravel.local:8081/api/token", {
      headers: {
        cache: 'no-store', // no cache
        Accept: "application/json",
        // Add any other headers you may need here
      },
    });

    if (!res.ok) {
      // Handle errors here if needed
      throw new Error("Network response was not ok");
    }

    const data = await res.json();
    console.log(data); // Output in browser's console

    return (
      <>Token is {data.token}</>
    );
  } catch (error) {
    console.error(error);
    return <div>Error: {error.message}</div>;
  }
};

export default Home;
