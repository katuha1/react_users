import React from "react";
import {Outlet, useRoutes } from "react-router-dom";
import NotFound from "./NotFound";
import Home from "./Home";
import Users from "./Users";
import User from "./User";

export default function Routes() {

  const routes = useRoutes([
    {
      path: 'home',
      element: <Home/>,
    },
    {
      path: 'users',
      element: <>
       <div className="pol">Пользователи:</div>
      <Outlet/>
      </>,
      children: [
        {
            path: '',
            element: <Users/>
        },
        {
            path: ':id',
            element: <User/>
        }
        
      ]
    },
    {
        path: '*',
        element: <NotFound/>,
    },
  ]);
  return routes;
}
