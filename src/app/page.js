
const Home = async() => {

  const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await res.json();
  console.log(data)

  return (
  <>test 123</>
  )
}
export default Home
