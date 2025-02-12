
import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";

import './Default.css'

export function Default(){
  return(
    <div className='Layout'>
      
    <Sidebar/>
    <div className="Content">
     <Outlet/>
    </div>
  </div>
  )
}