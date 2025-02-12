
import './SIdebar.css'
import twitterLogo from '../assets/twitterLogo.svg';
import { Bell, BookmarkSimple, DotsThreeCircle, Envelope, FileText, Hash, House, Pencil, User } from "phosphor-react";
import { NavLink } from 'react-router-dom';

export function Sidebar(){
  return(
    <aside className="Sidebar">
        <img className="Logo"src={twitterLogo} alt="" />
        <nav className='Main-navegation'>
          <NavLink  to="/">
            <House weight='fill'/>
            <span>
              Home
            </span>
          </NavLink>
          <a href="">
            <Hash/>
            <span>
              Explore
            </span>
          </a>
          <a href="">
            <Bell/>
            <span>
              Notifications
            </span>
          </a>
          <a href="">
            <Envelope/>
            <span>
              Messages
            </span>
          </a>
          <a href="">
            <BookmarkSimple/>
            <span>
              BookMarks
            </span>
          </a>
          <a href="">
            <FileText/>
            <span>
              List
            </span>
          </a>
          <a href="">
            <User/>
            <span>
              Profile
            </span>
          </a>
          <a href="">
            <DotsThreeCircle/>
            <span>
              More
            </span>
          </a>
        </nav>
        <button className='New-tweet' type='button'>
          <Pencil/>
          <span>
            Twitter
          </span>
        </button>
      </aside>
  )
}