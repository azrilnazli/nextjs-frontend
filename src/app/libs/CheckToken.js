// /libs/CheckToken.js

'use client'
import { redirect } from "next/navigation";
import useUserStore from "./store";

const CheckToken =  () => {
  const user = useUserStore() // get store
  // make a request to /api/dashboard ( auth:sanctum protected )  
  // const url = `${process.env.SERVER_URL}:${process.env.SERVER_PORT}/api/check-token`;
  // const res = await fetch(url, {
  //   cache: 'no-store', // no cache
  //   headers: {
  //     Authorization: `Bearer ${user.token}`, // Bearer token
  //     Accept: "application/json", // JSON request to Laravel
  //   },
  // });

  // if (!res.ok) {
  //   // sanctum returns 401 if token mismatch
  //   if (res.status === 401) {
  //     return redirect("/login"); // redirect to /login
  //   }
  // }
};

export default CheckToken;
