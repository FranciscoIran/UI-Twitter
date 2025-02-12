import { FormEvent, KeyboardEvent, useState } from "react"
import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from "../components/Tweet"

import './TimeLine.css'



export function TimeLine () {

  const [newTweet, setNewTweet] = useState('')

  // estado
  const [tweets,setTweets] = useState([
    'meu primeiro tweet',
    'teste',
    'Deu certo Tweetar'   
  ])
  function createNewTweet(event: FormEvent) {
    event.preventDefault();
    setTweets([newTweet, ...tweets])
    setNewTweet('')
  }

  function handleHotkeySubmit(event: KeyboardEvent){
        if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)){
          //subimit
          setTweets([newTweet, ...tweets])
          setNewTweet('')
        }
      }

  return (
    <main className='TimeLine'>
          <Header title='Home'/>

          <form onSubmit={createNewTweet} className='New-tweet-form'>
            <label htmlFor="tweet">
              <img src="https://avatars.githubusercontent.com/u/193635888?v=4" alt="Francisco Iranildo" />
              <textarea  
                id="tweet" 
                placeholder='O que esta acontecendo ?' 
                onKeyDown={handleHotkeySubmit}
                value={newTweet}
                onChange={(event) => {
                  setNewTweet(event.target.value)
                }}
              />
            </label>
            <button type='submit'>
              Tweet
            </button>

            <Separator/>


          </form>

          {tweets.map(tweets =>{
            return <Tweet content={tweets} key={tweets} />
          })}

        </main>
  )
}