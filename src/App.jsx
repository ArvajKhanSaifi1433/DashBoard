import React from "react";
import DashBoard from "./pages/DashBoard/DashBoard";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Transaction from "./pages/Transaction/Transaction";
import Support from "./pages/Support/Support";
const router = createBrowserRouter([
  {
    path: "/",
    element: <DashBoard />,
  },
  {
    path: "/transaction",
    element: <Transaction />,
  },
  {
    path: "/support",
    element: <Support />,
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
