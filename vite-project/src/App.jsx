import React from 'react'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from 'react-router/dom';
import Home from './components/pages/Home';
import RootLayout from './components/layout/RootLayout';
import Shop from './components/pages/Shop';
import Collection from './components/pages/Collection';
import Journal from './components/pages/Journal';
import LookBook from './components/pages/LookBook';
import Pages from './components/pages/Pages';
const App = () => {
const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home},
      { path: "shop", Component: Shop},
      { path: "collection", Component: Collection},
      { path: "journal", Component: Journal},
      { path: "lookbook", Component: LookBook},
      { path: "pages", Component: Pages},
    ],
  },
]);

  return (
    <RouterProvider router={router}/>
  )
}

export default App