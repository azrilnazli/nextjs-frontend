import CheckToken from '@/libs/CheckToken'; // module alias

const Dashboard = async () => {
  
  await CheckToken(); // check token validity

  return (
    <>dashboard</>
  );
};

export default Dashboard;
