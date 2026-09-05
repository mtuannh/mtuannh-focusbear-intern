import { useCallback, useState } from 'react'
import ChildButton from './ChildButton'

function UseCallbackDemo() {
    const [count, setCount] = useState(0)

    const handleChildClick = useCallback(() => {
    console.log('Child button clicked')
    }, [])

    return (
    <div className="flex flex-col items-center gap-4">
        <p className="text-xl font-semibold">
        Count: {count}
        </p>

        <button
        onClick={() => setCount(count + 1)}
        className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800"
        >
        Increase Parent Count
        </button>

        <ChildButton onClick={handleChildClick} />
    </div>
    )
}

export default UseCallbackDemo