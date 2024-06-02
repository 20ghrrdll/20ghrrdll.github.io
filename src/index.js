import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  useRouteError,
} from "react-router-dom";
import App from './App';
import About from './pages/About';
import Home from './pages/Home';
import Projects from './pages/Projects';
import BlogHome from './pages/Blog-Home'
import BlogEntry from "./pages/BlogEntry";
import NotFound from "./pages/NotFound";
import './index.css';

function ErrorBoundary() {
  let error = useRouteError();
  console.error(error);
  return <div>Dang!</div>;
}

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorBoundary />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "projects",
          element: <Projects />,
        },
        {
          path: "blog/page/:initialPage",
          element: <BlogHome/>,
        },
        {
          path: "/blog/post/:id",
          element: <BlogEntry/>,
          loader: async ({params}) => {
            const response = await fetch(`${process.env.PUBLIC_URL}/blog-posts/posts/${params.id}.md`);
            console.log(`Fetching markdown file: ${process.env.PUBLIC_URL}/blog-posts/posts/${params.id}.md`);
            if (!response.ok) {
              throw new Error(`Failed to fetch markdown file: ${response.statusText}`);
            }
            const text = await response.text();
            return { text };
          }
        },
         {
          path: "*",
          element: <NotFound/>,
        },
      ],
    },
  ]
);

const rootElem = document.getElementById('root')
const root = createRoot(rootElem)
root.render(
    <RouterProvider router={router} />
  );

