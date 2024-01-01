import ReactDOM from 'react-dom/client'
import { ToDoList } from './pages/to-do-list/to-do-list.component.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements
} from "react-router-dom";
import Header from './components/header.component.tsx';
import Home from './pages/home/home.component.tsx';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Header />}>
    <Route index element={<Home />} />
    <Route path="to-do" element={<ToDoList />} />
    {/* 
    <Route path="register" element={<Register />} /> */}
  </Route>
));

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)


