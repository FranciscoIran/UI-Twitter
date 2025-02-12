import { FormEvent, KeyboardEvent, useState } from "react"
import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from "../components/Tweet"

import './Status.css'
import { PaperPlaneRight } from "phosphor-react"


export function Status () {

  const [newAnswers, setNewAnswers] = useState('')
  
    // estado
    const [answers,setAnswers] = useState([
      'concordo...',
      'olha, faz sentido!',
      'parabens pelo progresso'   
    ])
    function createNewAnswers(event: FormEvent) {
      event.preventDefault();
      setAnswers([newAnswers, ...answers])
      setNewAnswers('')
    }
    function handleHotkeySubmit(event: KeyboardEvent){
      if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)){
        //subimit
        setAnswers([newAnswers, ...answers])
        setNewAnswers('')
      }
    }

  return (
    <main className='status'>
          <Header title='Tweet'/>
          
          <Tweet content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur sed magni molestias, harum officia natus ratione quis necessitatibus ea deserunt blanditiis sint quae? Accusantium ut quibusdam est asperiores, nulla facere?" />
          <Separator/>
          <form onSubmit={createNewAnswers} className='answer-tweet-form'>
            <label htmlFor="tweet">
              <img src="https://avatars.githubusercontent.com/u/193635888?v=4" alt="Francisco Iranildo" />
              <textarea  
                id="tweet"
                placeholder='Twitte sua resposta ?'
                onKeyDown={handleHotkeySubmit}
                value={newAnswers}
                onChange={(event)=> {
                  setNewAnswers(event.target.value)
                }}
              />
            </label>
            <button type='submit'>
              <PaperPlaneRight/>
              <span>
                Answer
              </span>
            </button>



          </form>
            {answers.map(answers =>{
              return <Tweet content={answers} key={answers} />
            })}
        </main>
  )
}