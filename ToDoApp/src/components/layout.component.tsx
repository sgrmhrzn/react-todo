import { MsalProvider } from "@azure/msal-react";
import { Route, RouterProvider, createRoutesFromElements } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/home.component";
import { ToDoList } from "../pages/to-do-list/to-do-list.component";
import Header from "./header.component";
import { IPublicClientApplication } from "@azure/msal-browser";

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Header />}>
    <Route index element={<Home />} />
    <Route path="to-do" element={<ToDoList />} />
    {/* 
    <Route path="register" element={<Register />} /> */}
  </Route>
));
interface IProps {
  instance: IPublicClientApplication
}
const Layout = ({ instance }: IProps) => {
  return (
    <MsalProvider instance={instance}>
      <RouterProvider router={router} />
    </MsalProvider>
  )
}
export default Layout;