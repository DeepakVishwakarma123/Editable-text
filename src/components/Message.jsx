import { useState } from "react";
import { useEffect } from "react";
import { Paragraph } from "./paragraph";
import { Input } from "./input";
import { Button } from "./button";
import { List } from "./list";
function ShowGreetingMessage()
{   
    const [intialtext,settext]=useState([])
    const [input,addInput]=useState('')
    const [greetMessage,setMessage]=useState('') 
    const [reverseMessage,setreverseMessage]=useState('')
    const [intiallength,setlength]=useState(0)
    const [number,setnumber]=useState('button to click to see a new random number')
    const date=new Date()
    const currentHours=date.getHours()
    const currentMinutes=date.getMinutes()
    const currentDate=date.getDate()
    let showRandomNumber=() =>{
          let randomNumber=Math.floor(Math.random()*(100-1))
          setnumber(randomNumber)
          console.log(randomNumber);
          }
    let addText=() => (<List value={input}/>) 
    useEffect(
        () =>{
            if(currentHours>=5 && currentHours<=11)
            {
               setMessage("Good morning")
            }
            else if(currentHours>=12 && currentHours<=16)
            {
                setMessage("Good afternoon")
            }
            else if(currentHours>=17 && currentHours<=21){
                setMessage("Good evening")
            }
            else{
                setMessage("Good night")
            }
        },[currentHours]
    )
    const setInput=e =>
        {    
            setlength(e.target.value.length)
            const reversedMessage=e.target.value.split("").reverse() 
            setreverseMessage(reversedMessage)
        }
    const getInputorsetInput=e =>addInput(e.target.value)
    return (
        <>
        <div className="grid grid-cols-3 gap-6 p-4">
      <Paragraph userMessage={greetMessage}/>
        </div>
       <Input fn={setInput} />
      <Paragraph userMessage={reverseMessage}/>
      <Paragraph userMessage={intiallength}/>
      <Button fn={showRandomNumber} label={"generate a new random numbers"}/>
      <Paragraph userMessage={number}/>
      <Paragraph userMessage={"add somthign below in input click to add on list"}/>
      <Input fn={getInputorsetInput} />
      <Button fn={addText} label={"addTexttolist"}/>
        </>
    )
}

export {ShowGreetingMessage}