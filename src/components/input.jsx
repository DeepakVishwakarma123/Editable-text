function Input(props)
{
    return (
        <textarea className="bg-red-900 w-48 h-40"  type="text" onInput={props.fn}/>
    )
}
export {Input}