import { Sparkle } from "phosphor-react";
import './Header.css'

interface HeaderProp{
  title: string;
}

export function Header(props:HeaderProp) {
  return(
    <div className='TimeLine-Header'>
      {props.title}
      <Sparkle/>
    </div>
  )
}