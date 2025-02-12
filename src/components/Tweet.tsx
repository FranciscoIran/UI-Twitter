import { ArrowClockwise, ChatCircle, Heart } from 'phosphor-react'
import './Tweet.css'
import {  NavLink } from 'react-router-dom'

interface tweetsProp{
  content: string
}

export function Tweet(props: tweetsProp ) {
  return(
    <NavLink to='/status' className="tweet">
      <img src="https://avatars.githubusercontent.com/u/193635888?v=4" alt="Francisco Iranildo" />
      <div className="tweet-content">
        <div className="tweet-content-header">
          <strong>Francisco Iranildo</strong>
          <span>@FranciscoIran</span>
        </div>
        <p>
         {props.content}
        </p>

        <div className="tweet-content-footer">
          <button type='button'>
            <ChatCircle/>
            20
          </button>
          <button type='button'>
            <ArrowClockwise/>
            20
          </button>
          <button type='button'>
            <Heart/>
            20
          </button>
        </div>
      </div>
    </NavLink>
  )
}