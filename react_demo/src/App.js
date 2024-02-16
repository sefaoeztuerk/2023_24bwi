import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import People from './Router/People';
import Friends from './Router/Friends';

const router = createBrowserRouter([
  {
    path: "/People",
    element: <People />,
  },
  {
    path: "/Friends",
    element: <Friends />,
  },
]);


function App() {
  return (<RouterProvider router={router} />
  );
}

export default App;
