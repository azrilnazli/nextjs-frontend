// /libs/CheckToken.js
import { redirect } from "next/navigation";

const CheckToken = async () => {
  // make a request to /api/dashboard ( auth:sanctum protected )  
  const res = await fetch("http://laravel.local:8081/api/check-token", {
    cache: 'no-store', // no cache
    headers: {
      Authorization: "Bearer fKEwsQUAahmIl4Qz8Okm1eYLuOnfqns8QpFKDtzU031feb40", // Bearer token
      Accept: "application/json", // JSON request to Laravel
    },
  });

  if (!res.ok) {
    // sanctum returns 401 if token mismatch
    if (res.status === 401) {
      return redirect("/login"); // redirect to /login
    }
  }
};

export default CheckToken;
