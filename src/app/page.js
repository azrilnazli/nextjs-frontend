
const Home = async() => {

  const res = await fetch("http://laravel.local:8000/api/token"); 
  const data = await res.json();
  console.log(data) // output in terminal, not browser inspect

  return (
  <>Token is {data.token}</>
  )
}
export default Home
