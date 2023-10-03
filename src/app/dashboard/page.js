import { redirect } from "next/navigation";

const Dashboard = async () => {

    // make a request to /api/dashboard ( auth:sanctum protected )
    const res = await fetch("http://laravel.local:8081/api/dashboard", {
      headers: {
        Authorization: "Bearer MM14AukeIDsPofYei5ewUOv2cjPmCi8QpQEfxkiZ75f10ebc", // Bearer token
        Accept: "application/json", // JSON request to Laravel
      },
    });

    if (!res.ok) {

      // sanctum return 401 if token mismatch
      if(res.status == 401){
        return redirect("/login"); // redirect to /login
      }
    }

    // success
    const data = await res.json();
    console.log(data); // Output in browser's console

    return (
      <>Dashboard access granted</>
    );
  

  return (
    <>Dashboard</>
  )
}
export default Dashboard
