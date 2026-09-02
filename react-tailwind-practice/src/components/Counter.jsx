import { useState } from 'react'
import Button from './Button'

function Counter() {
const [count, setCount] = useState(0)

return (
    <div className="flex flex-col items-center gap-4">
    <p className="text-2xl font-semibold text-gray-800">
        Count: {count}
    </p>

    <Button onClick={() => setCount(count + 1)}>
        Increment
    </Button>
    </div>
)
}

export default Counter