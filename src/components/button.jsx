function Button({fn,label})
{  
     
     
    if(label===undefined)
    {
        label="click"
    }
    return (
        <button className="bg-purple-700 text-4xl rounded-full p-4" onClick={fn}> {label} </button>
    )
}

export {Button}