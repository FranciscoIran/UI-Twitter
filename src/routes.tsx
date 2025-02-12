import { createBrowserRouter } from "react-router-dom"
import { TimeLine } from "./pages/TimeLine"
import { Status } from "./pages/Status"
import { Default } from "./layouts/Default"
import { Desenvolver } from "./pages/Desenvolver"

export const router = createBrowserRouter ([
  {
    path: '/',
    element: <Default/>,
    children: [
      {
        path: '/',
        element: <TimeLine/>
      },
      {
        path: '/status',
        element: <Status/>
      },
      {
        path: '/desenvolver',
        element: <Desenvolver/>
      }
    ]
  }
])