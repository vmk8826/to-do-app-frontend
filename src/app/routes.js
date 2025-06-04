"use client";

import { createHashRouter, RouterProvider } from "react-router-dom";
import SignupPage from "./components/signupPage";
import LoginPage from "./components/LoginPage.component";
import Dashboard from "./components/Dashboard.component";

// HashRouter works better with Next.js than BrowserRouter
const router = createHashRouter([
  {
    path: "/",
    element: <SignupPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
} 