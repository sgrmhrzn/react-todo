import { useState } from 'react'
import reactLogo from './../assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from '@fluentui/react-components';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  createRoutesFromElements
} from "react-router-dom";
import Header from '../components/header.component';



function App() {
  // const [count, setCount] = useState(0);
  // // let count = 0;
  // // let variable = 0;
  // const click = () => {
  //   // count += 1;
  //   console.log(count);
  //   setCount((count) => count + 1);
  // }

  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <div>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Welcome to TODO App</h1>
        <div className="card">

        </div>
      </div>
    </>
  )
}

export default App
