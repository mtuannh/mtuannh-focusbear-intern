import { useState } from 'react'
import Button from './Button'

function ListForm() {
const [text, setText] = useState('')
const [items, setItems] = useState([])

const handleSubmit = (event) => {
event.preventDefault()

if (text.trim() === '') {
    return
}

setItems([...items, text])
setText('')
}

return (
<div className="flex flex-col gap-4">
    <form onSubmit={handleSubmit} className="flex gap-2">
    <input
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
        placeholder="Enter an item"
        className="border border-gray-300 rounded-lg px-3 py-2"
    />

    <Button type="submit">
        Add
    </Button>
    </form>

    <ul className="list-disc pl-5">
    {items.map((item, index) => (
        <li key={index} className="text-gray-700">
        {item}
        </li>
    ))}
    </ul>
</div>
)
}

export default ListForm