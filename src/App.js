import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import LoginBootsrap from './components/LoginBoostrap';
import RegisterReactBootstrap from './components/RegisterReactBoostrap';
import Main from './layout/Main';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <RegisterReactBootstrap></RegisterReactBootstrap>
      },
      {
        path: '/register',
        element: <RegisterReactBootstrap></RegisterReactBootstrap>
      },
      {
        path: '/login',
        element: <LoginBootsrap></LoginBootsrap>
      },
    ]
  }
])

function App() {
  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
