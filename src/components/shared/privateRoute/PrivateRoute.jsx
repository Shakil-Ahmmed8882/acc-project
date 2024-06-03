"use client"
import useAuth from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";


const PrivateRoute = ({ children }) => {
  const router = useRouter();
  const { isAuthenticated, loading } = useAuth(); // Custom hook for authentication

  useEffect(() => {
    if (!isAuthenticated && !loading) {
      router.replace("/sign-in"); // Redirect to login page if not authenticated
    }
  }, [isAuthenticated, loading, router]);

  if (loading) {
    return <div>Loading...</div>; // Show loading indicator while checking authentication status
  }

  return <>{children}</>; // Render the children if authenticated
};

export default PrivateRoute;
